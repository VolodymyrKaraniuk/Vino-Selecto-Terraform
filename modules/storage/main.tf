resource "azurerm_storage_account" "sa" {
  name                     = "karaniukstorageaccount"
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "sc" {
  name                     = "task-artifacts"
  storage_account_name = azurerm_storage_account.sa.name
  container_access_type    = "private"
}