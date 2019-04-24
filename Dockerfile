FROM node:8

WORKDIR /app

COPY package*.json /app

RUN npm install express express-graphql graphql graphql-tools mongoose --save
RUN npm install apollo-server-express@1.3.2 --save
RUN npm install babel-cli babel-core babel-preset-env -D
RUN npm install node-fetch --save
RUN npm install --save-dev nodemon
RUN yarn add graphql-yup-middleware

COPY . /app

CMD npm run dev

