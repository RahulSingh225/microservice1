FROM node:alpine

WORKDIR /app/service1

# COPY ["package.json", "package-lock.json*", "./"]
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]