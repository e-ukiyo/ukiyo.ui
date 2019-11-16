FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY . .

RUN npm install --production

RUN npm run serve
RUN npm run build
RUN npm run lint

EXPOSE 8080
CMD [ "http-server", "dist" ]
