

resource "azurerm_virtual_machine" "vm1" {
  name                  = "backend"
  resource_group_name   = var.resource_group_name
  location              = var.location
  vm_size               = var.vm_size
  network_interface_ids = [var.nic-backend-id]

  storage_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
  storage_os_disk {
    name              = "myosdisk1"
    caching           = "ReadWrite"
    create_option     = "FromImage"
    managed_disk_type = "Standard_LRS"
  }
  os_profile {
    computer_name  = "hostname"
    admin_username = "testadmin"
    admin_password = "Password1234!"
  }
  os_profile_linux_config {
    disable_password_authentication = true

    ssh_keys {
      path = "/home/testadmin/.ssh/authorized_keys"
      key_data = var.vm_ssh_key
    }
  }
}

resource "azurerm_virtual_machine_extension" "vmex" {
  name                 = "run_python_project"
  virtual_machine_id   = azurerm_virtual_machine.vm1.id
  publisher            = "Microsoft.Azure.Extensions"
  type                 = "CustomScript"
  type_handler_version = "2.0"


  settings = <<SETTINGS
 {
  "fileUris": ["https://raw.githubusercontent.com/VolodymyrKaraniuk/Vino-Selecto-Terraform/main/install-app-backend.sh"],
  "commandToExecute": "./install-app-backend.sh"
 }
SETTINGS
}

# Associate NSG with VM Subnet
resource "azurerm_subnet_network_security_group_association" "nsga1" {
  subnet_id                 = var.sn-backend
  network_security_group_id = var.nsg-backend
}

# Application Gateway
resource "azurerm_application_gateway" "ag1" {
  name                = "backend-agw"
  resource_group_name = var.resource_group_name
  location            = var.location

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 1
  }

  gateway_ip_configuration {
    name      = "agw-ip-config"
    subnet_id = var.sn-agw-backend
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
    public_ip_address_id = var.pip-backend
  }

  backend_address_pool {
    name         = "vm-backend-pool"
    ip_addresses = [var.nic-backend-ip]
  }

  backend_http_settings {
    name                  = "http-settings"
    cookie_based_affinity = "Disabled"
    port                  = 8080 # Your app's port
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