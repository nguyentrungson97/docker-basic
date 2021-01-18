FROM node:10

#app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


# copy all file to dir
COPY . . 


#use port on docker
EXPOSE 8080

CMD ["node", "index.js"]