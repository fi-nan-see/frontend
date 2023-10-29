FROM node:latest as build
WORKDIR ./src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build ./src/app/dist/budget-profi /usr/share/nginx/html
