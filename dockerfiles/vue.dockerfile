FROM node:14
 
WORKDIR /vapp

COPY src/resources/vapp/package.json /vapp

RUN npm install
 
COPY src/resources/vapp ./

EXPOSE 3000

