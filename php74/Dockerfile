FROM php:7.4-fpm

ARG DEBIAN_FRONTEND=noninteractive

# UPDATE OS
RUN apt-get update

# INSTALL apt-utils
RUN apt-get install -y apt-utils

# INSTALL mysql ext
RUN docker-php-ext-install pdo_mysql

# INSTALL zip ext
RUN apt-get install -y --no-install-recommends --no-install-suggests libzip-dev zip unzip && \
    docker-php-ext-install zip

# INSTALL git
RUN apt-get install -y --no-install-recommends --no-install-suggests git

# INSTALL composer
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/bin \
    --filename=composer

# INSTALL mongodb ext
RUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev && \
    pecl install mongodb && \
    docker-php-ext-enable mongodb

# INSTALL supervisor
RUN apt-get install -y --no-install-recommends --no-install-suggests supervisor

# INSTALL swoole ext
RUN git clone https://github.com/swoole/swoole-src.git -b v4.4.12 && \
    cd swoole-src && \
    phpize && \
    ./configure --enable-openssl && \
    make && make install && \
    docker-php-ext-enable swoole

# INSTALL imap ext
RUN apt-get install -y --no-install-recommends --no-install-suggests libc-client-dev libkrb5-dev && \
    PHP_OPENSSL=yes \
    docker-php-ext-configure imap --with-kerberos --with-imap-ssl \
    && docker-php-ext-install imap

# INSTALL soap ext
RUN apt-get install -y --no-install-recommends --no-install-suggests libxml2-dev && \
    docker-php-ext-install soap

# INSTALL gd ext
RUN apt-get install -y --no-install-recommends --no-install-suggests zlib1g-dev libpng-dev && \
    docker-php-ext-install gd

# Add new commands here
RUN apt-get install -y --no-install-recommends --no-install-suggests hugo
RUN apt-get install -y --no-install-recommends --no-install-suggests libmagickwand-dev && \
    pecl install imagick && \
    docker-php-ext-enable imagick
# RUN composer global require hirak/prestissimo
RUN docker-php-ext-install mysqli && \
    docker-php-ext-enable mysqli
RUN pecl install redis && \
    docker-php-ext-enable redis
RUN composer config -g repos.packagist composer https://packagist.phpindonesia.id
RUN docker-php-ext-install exif && \
    docker-php-ext-enable exif

# CLEAN UP
RUN apt-get autoremove -y && \
    rm -rf /tmp/*

# ADD aditional php config
ADD ./conf/php.ini /usr/local/etc/php/conf.d/php.ini