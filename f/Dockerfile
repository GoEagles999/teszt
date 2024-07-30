FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

# Production use node instead of root
# USER node

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 9000
CMD [ "npm", "start" ]