FROM node:16
WORKDIR /app
COPY . /app
RUN npm i --legacy-peer-deps
RUN npm run build --verbose
EXPOSE 3000
CMD ["npm", "run", "start"]