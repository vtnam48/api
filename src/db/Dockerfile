FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=db
ENV MYSQL_USER=namvt
ENV MYSQL_PASSWORD=123

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

