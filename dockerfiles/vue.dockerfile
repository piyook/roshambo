FROM node:14
 
WORKDIR /vapp

COPY src/resources/vapp/package.json /vapp

RUN npm install

RUN npm install -g @vue/cli
 
COPY src/resources/vapp ./

EXPOSE 8080

# CMD ['npm', 'run', 'serve']