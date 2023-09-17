# Install NGINX
sudo amazon-linux-extras install nginx1
nginx -v

# Start NGINX
sudo fuser -k 80/tcp
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx

# /etc/XXX/nginx.conf 수정

# server_name "_" -> ssstacked.com

# certbot 인증서 생성 명령어 실행
