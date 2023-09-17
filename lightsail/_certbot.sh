# Download EPEL
sudo wget -r --no-parent -A 'epel-release-*.rpm' http://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/

# Install EPEL
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm

# Enable EPEL
sudo yum-config-manager --enable epel*

# Install certbot
sudo yum install -y certbot python2-certbot-apache
sudo yum install certbot-nginx

# Change nginx.conf
# - /etc/XXX/nginx.conf 수정
# - server_name "_" -> ssstacked.com

# Set domain
sudo certbot --nginx ssstacked.com
