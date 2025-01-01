FROM node:lts-alpine3.15

WORKDIR /api

COPY package.json /api/

RUN npm install

COPY . /api

# CMD ["npm", "run", "dev"]
CMD ["npx", "concurrently", "\"npx nodemon --watch . --watch src --exec ts-node index.ts\"", "\"ts-node src/infrastructure/seed.ts\""]

