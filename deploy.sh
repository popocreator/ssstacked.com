# Ubuntu
pm2 stop ssstacked
yarn
yarn build
sudo mkdir -p /var/www/ssstacked.com
sudo rm -rf /var/www/ssstacked.com/.next
sudo cp -r .next /var/www/ssstacked.com/.next
pm2 start "yarn start" --name ssstacked

# yarn start