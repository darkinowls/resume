FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY . /app

RUN rm -rf node_modules && yarn