FROM node:12.14.1

COPY . /kyc-test

WORKDIR /kyc-test

RUN npm install

CMD [ "npm", "start" ]