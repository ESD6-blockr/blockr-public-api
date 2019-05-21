FROM node:8
WORKDIR /app
COPY ./package.json ./package-lock.json ./.npmrc ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]