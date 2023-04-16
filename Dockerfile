FROM node:18.15.0-alpine

USER node
WORKDIR /home/node

ADD --chown=node:node . /home/node/
RUN npm install

CMD [ "npm", "run", "dev" ]