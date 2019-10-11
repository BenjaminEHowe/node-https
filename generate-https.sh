#!/bin/sh

openssl dhparam -out dhparam.pem 2048
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -subj "/C=GB/ST=West Sussex/L=Haywards Heath/O=Benjamin Howe/CN=127.0.0.1" -keyout 127-0-0-1.key -out 127-0-0-1.cert
