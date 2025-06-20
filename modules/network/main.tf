
#Network for Backend
resource "azurerm_virtual_network" "vn1" {
  name                = "${var.virtual-network-name}-1"
  resource_group_name = var.resource_group_name
  address_space       = [var.vnet_address_prefix]
  location            = var.location
}

resource "azurerm_subnet" "sn1" {
  name                 = "${var.subnet-name}-1"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vn1.name
  address_prefixes     = [var.subnet_address_prefix]
}

resource "azurerm_subnet" "agw1" {
  name                 = "${var.agw-subnet-name}-1"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vn1.name
  address_prefixes     = [var.subnet_agw_address_prefix]
}

resource "azurerm_network_security_group" "nsg1" {
  name                = "vm-nsg1"
  location            = var.location
  resource_group_name = var.resource_group_name

  security_rule {
    name                       = "allow-agw-inbound"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_address_prefix      = "*"
    source_port_range          = "*"
    destination_address_prefix = "*"
    destination_port_range     = "8080"
  }
  security_rule {
    name                       = "SSH"
    priority                   = 120
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}

# Create Public IP for Application Gateway
resource "azurerm_public_ip" "agw1" {
  name                = "${var.pip-name}-1"
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "vinoselectoapi"
}

# Network Interface for VM
resource "azurerm_network_interface" "nic1" {
  name                = "vm-nic1"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.sn1.id
    private_ip_address_allocation = "Dynamic"
    # public_ip_address_id = azurerm_public_ip.agw1.id
  }
}

# Associate NSG with VM Subnet
resource "azurerm_subnet_network_security_group_association" "nsga1" {
  subnet_id                 = azurerm_subnet.sn1.id
  network_security_group_id = azurerm_network_security_group.nsg1.id
}
# Application Gateway
resource "azurerm_application_gateway" "agw1" {
  name                = "backend"
  resource_group_name = var.resource_group_name
  location            = var.location

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 2
  }

  gateway_ip_configuration {
    name      = "agw-ip-config"
    subnet_id = azurerm_subnet.agw1.id
  }

  frontend_port {
    name = "http-port"
    port = 80
  }

  frontend_port {
    name = "https-port"
    port = 443
  }

  frontend_ip_configuration {
    name                 = "agw-frontend-ip"
    public_ip_address_id = azurerm_public_ip.agw1.id
  }

  backend_address_pool {
    name         = "vm-backend-pool"
    ip_addresses = [azurerm_network_interface.nic1.private_ip_address]
  }

  probe {
    name                = "custom-health-probe"
    protocol            = "Http"
    host                = "localhost"  # or your specific host header
    path                = "/api/doc/swagger"         # or your health check endpoint
    interval            = 30
    timeout             = 30
    unhealthy_threshold = 3
    match {
      status_code = ["200-404"]  # Accept 404 as healthy
    }
  }

  backend_http_settings {
    name                  = "http-settings"
    cookie_based_affinity = "Disabled"
    port                  = 8080
    protocol              = "Http"
    request_timeout       = 60
    probe_name           = "custom-health-probe"
  }

  http_listener {
    name                           = "http-listener"
    frontend_ip_configuration_name = "agw-frontend-ip"
    frontend_port_name             = "http-port"
    protocol                       = "Http"
  }

  request_routing_rule {
    name                       = "http-rule"
    rule_type                  = "Basic"
    http_listener_name         = "http-listener"
    backend_address_pool_name  = "vm-backend-pool"
    backend_http_settings_name = "http-settings"
    priority                   = 100
  }
}

#Network for Frontend
resource "azurerm_virtual_network" "vn2" {
  name                = "${var.virtual-network-name}-2"
  resource_group_name = var.resource_group_name
  address_space       = [var.vnet_address_prefix]
  location            = var.location
}

resource "azurerm_subnet" "sn2" {
  name                 = "${var.subnet-name}-2"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vn2.name
  address_prefixes     = [var.subnet_address_prefix]
}

resource "azurerm_subnet" "agw2" {
  name                 = "${var.agw-subnet-name}-2"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vn2.name
  address_prefixes     = [var.subnet_agw_address_prefix]
}

resource "azurerm_network_security_group" "nsg2" {
  name                = "vm-nsg2"
  location            = var.location
  resource_group_name = var.resource_group_name

  security_rule {
    name                       = "allow-agw-inbound"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_address_prefix      = var.subnet_agw_address_prefix
    source_port_range          = "*"
    destination_address_prefix = "*"
    destination_port_range     = "5173" # Your frontend app port
  }
}

# Create Public IP for Application Gateway
resource "azurerm_public_ip" "agw2" {
  name                = "${var.pip-name}-2"
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "vinoselecto"
}

# Network Interface for VM
resource "azurerm_network_interface" "nic2" {
  name                = "vm-nic2"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.sn2.id
    private_ip_address_allocation = "Dynamic"
  }
}

# Associate NSG with VM Subnet
resource "azurerm_subnet_network_security_group_association" "nsga2" {
  subnet_id                 = azurerm_subnet.sn2.id
  network_security_group_id = azurerm_network_security_group.nsg2.id
}

# Application Gateway
resource "azurerm_application_gateway" "ag2" {
  name                = "frontend-agw"
  resource_group_name = var.resource_group_name
  location            = var.location

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 1
  }

  gateway_ip_configuration {
    name      = "agw-ip-config"
    subnet_id = azurerm_subnet.agw2.id
  }

  frontend_port {
    name = "http"
    port = 80
  }

  frontend_port {
    name = "https"
    port = 443
  }

  frontend_ip_configuration {
    name                 = "agw-fe-ip"
    public_ip_address_id = azurerm_public_ip.agw2.id
  }

  backend_address_pool {
    name         = "vm-backend-pool"
    ip_addresses = [azurerm_network_interface.nic2.private_ip_address]
  }

  backend_http_settings {
    name                  = "http-settings"
    cookie_based_affinity = "Disabled"
    port                  = 5173 # Your app's port
    protocol              = "Http"
    request_timeout       = 60
  }

  http_listener {
    name                           = "http-listener"
    frontend_ip_configuration_name = "agw-fe-ip"
    frontend_port_name             = "http"
    protocol                       = "Http"
  }

  request_routing_rule {
    name                       = "http-rule"
    rule_type                  = "Basic"
    http_listener_name         = "http-listener"
    backend_address_pool_name  = "vm-backend-pool"
    backend_http_settings_name = "http-settings"
    priority                   = 100
  }
}


# DNS Records
resource "azurerm_dns_zone" "main" {
  name                = "vinoselecto.com"
  resource_group_name = var.resource_group_name
}

resource "azurerm_dns_a_record" "api" {
  name                = var.dns-label-backend
  zone_name           = azurerm_dns_zone.main.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_public_ip.agw1.ip_address]
}

resource "azurerm_dns_a_record" "app" {
  name                = var.dns-label-frontend
  zone_name           = azurerm_dns_zone.main.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_public_ip.agw2.ip_address]
}