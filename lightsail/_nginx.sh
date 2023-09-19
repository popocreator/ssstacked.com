# Install NGINX
sudo amazon-linux-extras install nginx1
nginx -v

# Start NGINX
sudo fuser -k 80/tcp
sudo systemctl enable nginx
sudo systemctl start nginx

# Print status NGINX
sudo systemctl status nginx
