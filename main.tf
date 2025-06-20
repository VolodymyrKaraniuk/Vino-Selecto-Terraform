terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.105.0"
    }
  }
}

provider "azurerm" {
  features {}
}

module "network-module" {
    source = "./modules/network"
    resource_group_name = var.resource_group_name
    location = var.location
    virtual-network-name = var.virtual_network_name
    subnet-name = var.subnet_name
    network-security-group-name = var.network_security_group_name
    pip-name = var.public_ip_address_name
    subnet_address_prefix = var.subnet_address_prefix
    vnet_address_prefix = var.vnet_address_prefix
}

module "backend" {
  source              = "./modules/backend"
  resource_group_name = var.resource_group_name
  location            = var.location
  vm_name             = var.vm_name
  vm_size             = var.vm_size
  vm_ssh_key          = var.vm_ssh_key
  nic-backend-id      = module.network-module.nic-backend-id
}

# module "frontend" {
#   source = "./modules/frontend"
#   resource_group_name = var.resource_group_name
#   location = var.location
#   vm_name = var.vm_name
#   vm_size = var.vm_size
#   vm_ssh_key = var.vm_ssh_key
#   nic_frontend = module.network-module.nic-frontend
# }

