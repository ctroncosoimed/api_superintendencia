FROM node:8

WORKDIR /app

COPY package*.json /app

RUN npm install express -g
RUN npm install node-fetch --save
RUN npm install graphql express-graphql graphql-tools graphql-yup-middleware --save

RUN npm install async
RUN npm install gulp
RUN npm install -g gulp-cli --save
RUN npm install kue
RUN npm install --save apollo-server-express@1.3.2
RUN npm install --save-dev nodemon

RUN npm install -g jake
RUN npm install --save express-error-slack

RUN npm install slack-node
RUN npm install babel-cli babel-core babel-preset-env -D

COPY . /app

CMD npm run dev