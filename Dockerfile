FROM node as node-builder
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=node-builder ./dist/assignment2Proj /usr/share/nginx/html
COPY ./nginx-angular.conf /etc/nginx/conf.d/default.conf
EXPOSE 80