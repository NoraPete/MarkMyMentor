FROM node:alpine
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV RDS_HOSTNAME=$RDS_HOSTNAME
ENV RDS_USERNAME=$RDS_USERNAME
ENV RDS_PASSWORD=$RDS_PASSWORD
ENV RDS_DB_NAME=$RDS_DB_NAME
ENV APP_PORT=$APP_PORT
EXPOSE 3000
CMD [ "npm", "start" ]
