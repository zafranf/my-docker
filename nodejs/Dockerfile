FROM node:8

ARG DEBIAN_FRONTEND=noninteractive

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY server.js ./

# INSTALL forever
RUN npm install -g forever && \
    mkdir /.forever && \
    chmod -R 777 /.forever

# INSTALL gulp
RUN npm install -g gulp

# EXPOSE 3000 3001 3002 3003

CMD [ "npm", "start" ]