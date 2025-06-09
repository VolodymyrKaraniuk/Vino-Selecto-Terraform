variable "location" {
    default = "uksouth"
}
variable "resource_group_name" {
  default = "mate-azure-task-12"
}

variable "vm_name" {
  default = "backend"
}
variable "vm_size" {
  default = "Standard_B1s"
}
variable "vm_image" {
  default = "Ubuntu2204"
}
variable "vm_ssh_key" {
  default = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC8DFHw2ao4voPY/pvYwwjcG5gBKwEPWf2KDr7TFUpvZ9Qg1ndEfMD2B2FUEM4ScwFNeW0XQhX+TN9GWErVTlKENdrQORTbn/t8iWK5Xbzf8v17z/6kEDNT9NKDvt9Gbpexd+cRrRU0sbNuA14HQNTxJ5woMk2xhVxzg/5PcgNR54dOIultTq+xzMhn+5k7IsduoH4asu//DYWsz9HlbPScfZcoiqyIcY97TEopyYEzuQdfoCAsuwrQB9srYkIA+WyvTlp653Hhzy3NFjIopj7nG7EBs33COw0hIEAQMJ4Gqns67ulZRjSnBD/nhTsocZGRccAoCzeeTFzMfKApbfLv9ZhLsiZXaLxYmfZ2At2z2trJSsgnoeA1dX7PblB8V6Bpu5kLtywZA9F930geuaohKNm3Ut+LaKcrE4q86wkQ5vFlSgatGxBrjbxe8ixqi7M/cJzHjY7pQXZ5gx5e1agMj/SfzB/dtlQtieKpBnUH3ZtkTiSWyGgK7B1PapaXRWs= володимир@DESKTOP-KU3JBK0"
}
variable "nic-backend-id" {
}

variable "nic-backend-ip" {
}

variable "sn-backend" {
}

variable "nsg-backend" {
}


variable "sn-agw-backend" {
}

variable "pip-backend" {
}