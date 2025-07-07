FROM node:20-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3002

CMD ["yarn", "dev"]
