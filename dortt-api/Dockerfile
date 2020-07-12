FROM node:12-alpine

# Create app directory
RUN mkdir -p /home/dortt/api/node_modules && chown -R node:node /home/dortt/api
WORKDIR /home/dortt/api

COPY package.json yarn.* ./
USER node
RUN yarn

COPY --chown=node:node . .

EXPOSE 3001
CMD ["yarn", "start"]

