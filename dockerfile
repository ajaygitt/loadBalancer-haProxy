FROM node:12
WORKDIR /home/node/app
COPY server /home/node/app
RUN npm install
