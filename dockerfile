FROM node:12
ENV NODE_ENV production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean --force
RUN npm install
RUN npm install -g typescript
COPY . /usr/src/app
RUN tsc
WORKDIR /usr/src/app/client
RUN npm i
RUN npm install -g @angular/cli @angular-devkit/build-angular
RUN npm run build
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["npm","start"]