variable "location" {
    default = "uksouth"
}
variable "resource_group_name" {
  default = "mate-azure-task-12"
}
variable "virtual-network-name" {
  default = "vnet"
}
variable "subnet-name" {
  default = "subnet1"
}
variable "agw-subnet-name" {
  default = "agw-subnet1"
}
variable "pip-name" {
  default = "agw-pip1"
}
variable "network-security-group-name" {
  default = "nsg1"
}
variable "subnet_address_prefix" {
  default = "10.0.1.0/24"
}
variable "subnet_agw_address_prefix" {
  default = "10.0.2.0/24"
}
variable "vnet_address_prefix" {
  default = "10.0.0.0/16"
}
variable "dns-label-backend" {
  default = "api"
}
variable "dns-label-frontend" {
  default = "app"
}

