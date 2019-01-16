# use latest version of node
FROM node:8

# set working directory
COPY package*.json ./
COPY server.js ./
RUN npm install
# bundle source code

# expose port 8080
EXPOSE 8080

# start app with yarn
CMD ["npm", "start"]
