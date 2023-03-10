FROM ubuntu:18.04

WORKDIR /app
COPY . /app/

RUN apt update
RUN apt install nodejs npm -y
RUN npm install 

EXPOSE 3000
CMD [ "./.entrypoint.sh" ]