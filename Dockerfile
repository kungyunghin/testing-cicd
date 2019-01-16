# use latest version of node
FROM node:8

# set working directory
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
# bundle source code
COPY . .

# expose port 3000
EXPOSE 8080

# start app with yarn
CMD ["npm", "start"]
