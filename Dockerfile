FROM node:alpine as BUILD
ARG REGISTRY='@blockr:registry=https://registry.npmjs.org'
WORKDIR /
COPY ./package.json ./package-lock.json ./
RUN echo ${REGISTRY} > ./.npmrc
RUN npm install
COPY . .
RUN npm run build:docker
ENTRYPOINT ["npm", "run", "dev"]

FROM node:alpine as FINAL
WORKDIR /app
COPY --from=BUILD /dist .
WORKDIR /
COPY --from=BUILD /.npmrc /.package*.json ./
ENV NODE_ENV=production
RUN npm install
ENTRYPOINT [ "node", "dist/main" ]