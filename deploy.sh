# Ubuntu
yarn build
sudo mkdir -p /var/www/ssstacked.com
sudo rm -rf /var/www/ssstacked.com/.next
sudo cp -r .next /var/www/ssstacked.com/.next
pm2 start "yarn start"
# yarn start