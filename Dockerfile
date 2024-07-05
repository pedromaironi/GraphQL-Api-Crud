# Dockerfile

FROM node:latest

WORKDIR /pedromaironi/src/app

COPY package.json .

RUN npm install

COPY . .

COPY .env ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

LABEL name="graphql-api"
