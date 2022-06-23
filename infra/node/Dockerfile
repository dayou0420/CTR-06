FROM node:16

RUN apt-get update && \ 
  apt-get -y install libx11-xcb-dev libxtst6 libxss1 libgconf-2-4 libnss3-dev libasound2 libatk-bridge2.0-0 libgtk-3-dev

WORKDIR /src

CMD [ "node", "server.js" ]
