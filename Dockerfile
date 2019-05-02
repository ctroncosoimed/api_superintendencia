FROM node:8

WORKDIR /app

COPY package*.json /app

RUN npm install express express-graphql graphql graphql-tools mongoose faker kue graphql-yup-middleware node-fetch async --save
RUN npm install apollo-server-express@1.3.2 --save
RUN npm install babel-cli babel-core babel-preset-env -D
RUN npm install --save-dev nodemon
RUN npm i --save @std/esm

COPY . /app

CMD npm run dev

EXPOSE 5000