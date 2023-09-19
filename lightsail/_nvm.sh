# Install nvm
# 설치와 동시에 추가되지만, vi ~/.bashrc 파일에 아래 내용 없다면, 추가필요
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_c
sudo yum install wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc

# Set node version
nvm install 16
nvm use 16

# Print node version
node -v

