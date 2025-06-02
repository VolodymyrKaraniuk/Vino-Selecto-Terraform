#!/bin/bash

# Script to silently install and start the todo web app on the virtual machine.
# Note that all commands bellow are without sudo - that's because extention mechanism
# runs scripts under root user.

# install system updates and isntall python3-pip package using apt. '-yq' flags are
# used to suppress any interactive prompts - we won't be able to confirm operation
# when running the script as VM extention.
sudo apt-get update -yq
sudo npm install -g npm -yq

# Create a directory for the app and download the files.
sudo mkdir /frontend
# make sure to uncomment the line bellow and update the link with your GitHub username
git clone https://github.com/VolodymyrKaraniuk/Vino-Selecto-Terraform.git
sudo cp -r Vino-Selecto-Terraform/src/frontend/* /frontend

# create a service for the app via systemctl and start the app
sudo chmod 777 /frontend/*
sudo mv /frontend/frontend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl start frontend
sudo systemctl enable frontend