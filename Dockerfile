FROM node:alpine

WORKDIR /app

COPY ./index.js /app/

ENV NODE_ENV production

EXPOSE 3000
ENTRYPOINT node index.js
