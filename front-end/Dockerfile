# Pull the image of Nodejs in Docker library
FROM node:18-alpine

# Create app directory in Docker
WORKDIR /usr/src/app

# Install app dependencies from package.json
COPY package.json ./

# Command to install neccessary components
RUN npm i

# Copy all the files in Back-end into app directory
COPY . /usr/src/app

# Declare a binding port to Docker
EXPOSE 3000

# Command to start
CMD ["npm", "start"]