FROM node:alpine

WORKDIR /src

ARG app_env
ENV APP_ENV=${app_env}

COPY package.json .
COPY ./src/adaptor/secondary/rdbms/prisma/schema.prisma ./src/adaptor/secondary/rdbms/prisma/schema.prisma
RUN yarn install
RUN yarn prisma:generate

EXPOSE 3000

CMD yarn start:dev
