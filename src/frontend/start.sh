#! /bin/bash

cd /frontend
rm -rf node_modules package-lock.json
npm install
sudo npm run dev -- --port 80