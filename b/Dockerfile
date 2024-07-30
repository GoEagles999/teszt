


# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node


COPY package*.json ./
COPY --chown=node:node . .
RUN npm i

RUN npm run build

CMD ["node", "dist/main.js"]