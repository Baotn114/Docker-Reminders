# Pull the image of Nodejs in Docker library
FROM node:18-alpine

# Create app directory in Docker
WORKDIR /usr/src/app

# Install app dependencies from package.json
COPY package.json /usr/src/app

# Command to install neccessary components
RUN npm install

# Copy all the files in Back-end into app directory
COPY . /usr/src/app

# Declare a binding port to Docker
EXPOSE 4000

# Command to start
CMD ["node", "index.js"]

