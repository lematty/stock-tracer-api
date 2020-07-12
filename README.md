## Description

Stock Tracer API for [Stock Tracer App](https://github.com/lematty/stock-tracer)

# Installation and setup

## Prerequisites
To run this application, you will need to have already installed install [yarn](https://classic.yarnpkg.com/en/docs/install) & [docker-compose](https://docs.docker.com/compose/install/#install-compose)

## Install dependencies
```bash
$ yarn install
```

## Docker

```bash
# Start docker
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# Using the API

## API documentation
Swagger API documentation [here](http://localhost:3000/api) (app must be running)

## Create users

Authentication is required to use the API.

You must first create a user at `http://localhost:3000/api/auth/register` with the following body

```
{
  email: string;
  username: string;
  password: string;
}
```
Specific property requirements are found in [user.model.ts](https://github.com/lematty/stock-tracer-api/blob/master/src/models/user.model.ts)


## Getting a valid token for requests

Once a user is created/registered, you can then login with `http://localhost:3000/api/auth/login` to get your token. This request requires a body:
```
{
  email: string;
  password: string;
}
```

If validated, this will return a valid token to be provided with all other requests.

## Making requests

Once the user is created, and a valid token is obtained, you can the use all other endpoints of the API. All requets will require the token in the header similar to the following:

Bearer Token YOUR_USER_TOKEN_HERE

# Testing

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
