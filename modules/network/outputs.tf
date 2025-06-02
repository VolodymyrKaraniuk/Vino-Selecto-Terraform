
# output "nic-backend" {
#   value = azurerm_network_interface.vm1.id
# }

output "nic-frontend" {
  value = azurerm_network_interface.vm2.id
}