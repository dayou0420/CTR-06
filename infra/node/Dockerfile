FROM node:16

RUN apt-get update && \ 
  apt-get -y install libx11-xcb-dev libxtst6 libxss1 libgconf-2-4 libnss3-dev libasound2 libatk-bridge2.0-0 libgtk-3-dev

WORKDIR /src

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"

ENV PATH="$DENO_INSTALL/bin:$PATH"

CMD [ "node", "server.js" ]
