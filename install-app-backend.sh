#!/bin/bash

sudo apt-get update -yq
sudo apt-get install python3-pip -yq
echo -------------------
sudo mkdir /backend
git clone -b develop https://github.com/Java50KhrypunovMaxim/shop_wine.git
sudo cp -r shop_wine/* /backend

echo ------------------
sudo chmod 777 /backend/*
sudo mv /backend/backend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl start backend
sudo systemctl enable backend
