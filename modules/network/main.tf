

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

# resource "azurerm_network_security_group" "nsg" {
#   name                = var.network-security-group-name
#   location            = var.location
#   resource_group_name = var.resource_group_name
# }

# resource "azurerm_network_security_rule" "example" {
#   name                        = "HTTP"
#   priority                    = 1002
#   direction                   = "Inbound"
#   access                      = "Allow"
#   protocol                    = "Tcp"
#   source_port_range           = "*"
#   destination_port_range      = 8080
#   source_address_prefix       = "*"
#   destination_address_prefix  = "*"
#   resource_group_name         = var.resource_group_name
#   network_security_group_name = azurerm_network_security_group.nsg.name
# }


# resource "azurerm_subnet_network_security_group_association" "example" {
#   subnet_id                 = azurerm_subnet.sn.id
#   network_security_group_id = azurerm_network_security_group.nsg.id
# }

# resource "azurerm_network_interface" "vm1" {
#   name                = "example-nic-vm1"
#   location            = var.location
#   resource_group_name = var.resource_group_name

#   ip_configuration {
#     name                          = "internal"
#     subnet_id                     = azurerm_subnet.sn.id
#     private_ip_address_allocation = "Dynamic"
#     public_ip_address_id          = azurerm_public_ip.pip.id
#   }
# }

resource "azurerm_network_interface" "vm2" {
  name                = "example-nic-vm2"
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.sn.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}
