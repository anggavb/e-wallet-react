FROM node:24.11.1-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 5000

CMD [ "nginx", "-g", "daemon off;" ]