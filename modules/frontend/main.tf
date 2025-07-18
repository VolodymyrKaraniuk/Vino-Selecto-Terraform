

resource "azurerm_virtual_machine" "vm2" {
  name                  = "frontend"
  resource_group_name   = var.resource_group_name
  location              = var.location
  vm_size               = var.vm_size
  network_interface_ids = [var.nic_frontend]

  storage_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
  storage_os_disk {
    name              = "myosdisk2"
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
  name                 = "run_front_project"
  virtual_machine_id   = azurerm_virtual_machine.vm2.id
  publisher            = "Microsoft.Azure.Extensions"
  type                 = "CustomScript"
  type_handler_version = "2.0"

  
  settings = <<SETTINGS
 {
  "fileUris": ["https://raw.githubusercontent.com/VolodymyrKaraniuk/Vino-Selecto-Terraform/main/install-app-frontend.sh"],
  "commandToExecute": "./install-app-frontend.sh"
 }
SETTINGS
}