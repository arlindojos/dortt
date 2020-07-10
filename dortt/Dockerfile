FROM node:12-alpine

# Create app directory
RUN mkdir -p /home/dortt/front/node_modules && chown -R node:node /home/dortt/front
WORKDIR /home/dortt/front

COPY package.json yarn.* ./
USER node
RUN yarn

COPY --chown=node:node . .

EXPOSE 9000
CMD ["yarn", "dev"]