# Install NGINX
sudo amazon-linux-extras install nginx1
nginx -v

# Start NGINX
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
