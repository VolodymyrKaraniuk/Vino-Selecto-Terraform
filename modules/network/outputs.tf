# Backend

output "nic-backend-id" {
  value = azurerm_network_interface.nic1.id
}

output "nic-frontend" {
  value = azurerm_network_interface.nic2.id
}