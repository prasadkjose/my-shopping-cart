# My Shopping Cart

> A shopping cart built using the MERN stack and hosted with docker on AWS Elasticbean and Elastic Container Registry(ECR).

[![NPM Version][npm-image]][npm-url]
[![react Version][react-image]][react-url]
![](header.png)

## Development setup (without Docker)

Install all dependencies

```sh
npm install
npm run install-dependencies
```

Run the Backend and Frontend with

```sh
npm run server-start
npm run start
```

## Development setup (with Docker)

Build individual images of my-shop and my-shop server with

```sh
docker build -t <name:tag>
```

## or

Build and run with docker-compose

```sh
docker-compose up --build
```

## Production setup

WIP

## Release History

- 1.0.0
  - Basic functionality - CRUD

## Meta

Made by Prasad.

## Contributing

1. Fork it (<https://github.com/prasadkjose/my-shopping-cart/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/badge/node-14.5.0-brightgreen
[npm-url]: https://npmjs.org/
[react-image]: https://img.shields.io/badge/react-6.13.1-brightgreen
[react-url]: https://reactjs.org/
