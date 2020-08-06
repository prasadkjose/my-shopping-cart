# pull official base image
FROM node:14.5.0-alpine3.10

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm i --silent

# add app
COPY . ./
#Expose port and start application
#EXPOSE 8081
# start app
CMD ["npm", "start"]

