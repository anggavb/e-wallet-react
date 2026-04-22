FROM node:24.11.1-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

CMD [ "nginx", "-g", "daemon off;" ]

# RUN on local for port forwarding Mac to Orbstack
# ssh -L 0.0.0.0:5500:192.168.139.25:5000 -Nf anggavb@192.168.139.25