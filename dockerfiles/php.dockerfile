FROM php:7.4-fpm-alpine
 
WORKDIR /var/www/html
 
COPY src .
 
RUN docker-php-ext-install pdo pdo_mysql

# FOR PRODUCTION : allow acess to session storage otherwise throws errors

# RUN chmod -R gu+w storage

# RUN chmod -R guo+w storage

# RUN php artisan cache:clear

## FOR DEVELOPMENT : Comment out above and uncomment below to set a 
 
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel
