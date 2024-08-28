FROM node:20-alpine

WORKDIR /opt/

COPY ./src/resources/vapp/package.json ./

ENV PATH /opt/node_modules/.bin:$PATH

RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/vapp

COPY ./src/resources/vapp ./

EXPOSE 5173

