# pull official base image
FROM node:14.5.0-alpine3.10

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm i 
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
# start app
CMD ["npm", "start"]

