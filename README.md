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

Please adjust the documentation according to your API's functionality, and you can also include additional information such as error responses, headers, and authentication requirements based on your project's needs.
