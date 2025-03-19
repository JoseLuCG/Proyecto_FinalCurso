FROM node

EXPOSE 4000

WORKDIR /usr/src/app/
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm run build
RUN rm .gitignore package.json package-lock.json public README.md src node_modules -rf

WORKDIR /usr/src/app/backend
#RUN npm install --omit=dev

#ENTRYPOINT [ "npm", "start" ]
