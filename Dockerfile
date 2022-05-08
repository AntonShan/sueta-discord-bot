FROM "node:16.14.2"

ENV YARN_VERSION 1.22.15
RUN yarn policies set-version $YARN_VERSION

WORKDIR /usr/src/app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
CMD [ "yarn", "start:prod" ]