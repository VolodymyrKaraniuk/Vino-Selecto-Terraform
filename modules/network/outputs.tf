# # Backend

# output "nic-backend-id" {
#   value = azurerm_network_interface.nic1.id
# }

# output "nic-backend-ip" {
#   value = azurerm_network_interface.nic1.private_ip_address
# }

# output "sn-backend" {
#   value = azurerm_subnet.sn1.id
# }

# output "nsg-backend" {
#   value = azurerm_network_security_group.nsg1.id
# }

# output "sn-agw-backend" {
#   value = azurerm_subnet.agw1.id
# }

# output "pip-backend" {
#   value = azurerm_public_ip.agw1.id
# }


output "nic-frontend" {
  value = azurerm_network_interface.nic2.id
}