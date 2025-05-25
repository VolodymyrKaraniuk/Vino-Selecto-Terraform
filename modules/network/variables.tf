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
  default = "default"
}
variable "pip-name" {
  default = "linuxboxpip"
}
variable "network-security-group-name" {
  default = "defaultnsg"
}
variable "subnet_address_prefix" {
  default = "10.0.0.0/24"
}
variable "vnet_address_prefix" {
  default = "10.0.0.0/16"
}
variable "dns_label" {
  default = "matetask"
}

