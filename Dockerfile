FROM node as node-builder
WORKDIR /frontend
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node-builder /frontend/dist/assignment2Proj /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
EXPOSE 80