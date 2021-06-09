FROM node:lts-alpine as build-stage

WORKDIR /app
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
        git

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]