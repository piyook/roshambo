FROM php:8.3-fpm-alpine

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql

#  Allow acess to session storage otherwise tLaravel throws errors

RUN chmod -R gu+w storage

RUN chmod -R guo+w storage

RUN php artisan cache:clear

## setup a laravel user

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel
