# Dockerfile
FROM node:14

WORKDIR /app


COPY package.json package-lock.json /app/
RUN npm install --production

COPY . /app
COPY . .

CMD ["npm", "start"]

EXPOSE 3005
