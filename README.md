<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

**Features:**
- Create new events with person information.
- Retrieve events and associated details.
- Update event details by ID.
- Delete events by ID.
- API documentation for each endpoint.
- Unit testing with Jest.
- Logging with request tracking.

**Technologies:**
- Nest.js framework
- TypeScript
- Jest testing framework

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Events API Documentation

This API allows you to manage events and their associated information.

### Base URL

`http://localhost:3000`

### Endpoints

#### Get all events

- **URL**: `/events`
- **Method**: `GET`
- **Description**: Retrieve a list of all events.
- **Response**: An array of EventEntity objects.
- **Example**:
  ```http
  GET /events
  ```
  **Response**:
  ```json
  [
    {
      "id": 1,
      "personList": [...],
      "when": "2023-08-27T12:34:56.789Z"
    },
    // ...
  ]
  ```

#### Get event by ID

- **URL**: `/events/:id`
- **Method**: `GET`
- **Description**: Retrieve an event by its ID.
- **Parameters**:
    - `id` (number): The ID of the event.
- **Response**: The EventEntity object associated with the provided ID.
- **Example**:
  ```http
  GET /events/1
  ```
  **Response**:
  ```json
  {
    "id": 1,
    "personList": [...],
    "when": "2023-08-27T12:34:56.789Z"
  }
  ```

#### Create a new event

- **URL**: `/events`
- **Method**: `POST`
- **Description**: Create a new event.
- **Request Body**: CreateEventDto object with person details.
- **Response**: A success message.
- **Example**:
  ```http
  POST /events
  Content-Type: application/json

  {
    "name": "John Doe",
    "age": 30,
    "healthStatus": "Fine"
  }
  ```
  **Response**:
  ```json
  "Event created for John Doe"
  ```

#### Create multiple events

- **URL**: `/events/all`
- **Method**: `POST`
- **Description**: Create multiple events.
- **Request Body**: An array of CreateEventDto objects.
- **Response**: An array of names for the created events.
- **Example**:
  ```http
  POST /events/all
  Content-Type: application/json

  [
    {
      "name": "Alice",
      "age": 25,
      "healthStatus": "Bad"
    },
    {
      "name": "Bob",
      "age": 28,
      "healthStatus": "Fine"
    }
  ]
  ```
  **Response**:
  ```json
  ["Event created for Alice", "Event created for Bob"]
  ```

#### Update event by ID

- **URL**: `/events/:id`
- **Method**: `PATCH`
- **Description**: Update an event by its ID.
- **Parameters**:
    - `id` (number): The ID of the event.
- **Request Body**: Updated EventEntity object.
- **Response**: The updated EventEntity object.
- **Example**:
  ```http
  PATCH /events/1
  Content-Type: application/json

  {
    "id": 1,
    "personList": [...],
    "when": "2023-08-27T15:00:00.000Z"
  }
  ```
  **Response**:
  ```json
  {
    "id": 1,
    "personList": [...],
    "when": "2023-08-27T15:00:00.000Z"
  }
  ```

#### Remove event by ID

- **URL**: `/events/:id`
- **Method**: `DELETE`
- **Description**: Remove an event by its ID.
- **Parameters**:
    - `id` (string): The ID of the event.
- **Response**: An object indicating the result of the removal operation.
- **Example**:
  ```http
  DELETE /events/1
  ```
  **Response**:
  ```json
  {
    "eventList": [...],
    "message": "Event removed successfully"
  }
  ```

