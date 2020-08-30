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
EXPOSE 80
CMD ["npm","start"]