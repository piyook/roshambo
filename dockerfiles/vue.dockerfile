FROM node:14

WORKDIR /opt/

COPY ./src/resources/vapp/package.json ./

ENV PATH /opt/node_modules/.bin:$PATH

RUN npm install

WORKDIR /opt/vapp

COPY ./src/resources/vapp ./


EXPOSE 3000

