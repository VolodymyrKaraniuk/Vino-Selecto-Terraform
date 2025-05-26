

resource "azurerm_virtual_network" "vn" {
  name                = var.virtual-network-name
  resource_group_name = var.resource_group_name
  address_space       = [var.vnet_address_prefix]
  location            = var.location
}

resource "azurerm_subnet" "sn" {
  name                 = var.subnet-name
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vn.name
  address_prefixes     = [var.subnet_address_prefix]
}

resource "azurerm_public_ip" "pip" {
  name                = var.pip-name
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  domain_name_label = var.dns_label
}

# resource "azurerm_lb" "lb" {
#   name                = "example-lb"
#   location            = var.location
#   resource_group_name = var.resource_group_name
#   sku                 = "Standard"

#   frontend_ip_configuration {
#     name                 = "PublicIPAddress"
#     public_ip_address_id = azurerm_public_ip.pip.id
#   }
# }

# resource "azurerm_lb_backend_address_pool" "example" {
#   loadbalancer_id = azurerm_lb.lb.id
#   name            = "BackEndAddressPool"
# }

# resource "azurerm_lb_probe" "example" {
#   loadbalancer_id     = azurerm_lb.lb.id
#   name                = "http-probe"
#   port                = 80
#   protocol            = "Http"
#   request_path        = "/"
# }

# resource "azurerm_lb_rule" "example" {
#   loadbalancer_id                = azurerm_lb.lb.id
#   name                           = "http-rule"
#   protocol                       = "Tcp"
#   frontend_port                  = 80
#   backend_port                   = 80
#   frontend_ip_configuration_name = "PublicIPAddress"
#   backend_address_pool_ids       = [azurerm_lb_backend_address_pool.example.id]
#   probe_id                       = azurerm_lb_probe.example.id
# }

resource "azurerm_network_security_group" "nsg" {
  name                = var.network-security-group-name
  location            = var.location
  resource_group_name = var.resource_group_name
}

resource "azurerm_network_interface" "vm1" {
  name                = "example-nic-vm1"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.sn.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_network_interface" "vm2" {
  name                = "example-nic-vm2"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.sn.id
    private_ip_address_allocation = "Dynamic"
  }
}

# # Associate NICs with backend pool
# resource "azurerm_network_interface_backend_address_pool_association" "vm1" {
#   network_interface_id    = azurerm_network_interface.vm1.id
#   ip_configuration_name   = "internal"
#   backend_address_pool_id = azurerm_lb_backend_address_pool.example.id
# }

# resource "azurerm_network_interface_backend_address_pool_association" "vm2" {
#   network_interface_id    = azurerm_network_interface.vm2.id
#   ip_configuration_name   = "internal"
#   backend_address_pool_id = azurerm_lb_backend_address_pool.example.id
# }
