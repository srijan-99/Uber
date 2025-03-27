# UBER-CLONE - Backend

This project implements the backend for an Uber Clone application using Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/UBER-CLONE.git
    ```

2. Navigate to the project folder:
    ```
    cd UBER-CLONE/Backend
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Create a `.env` file in the project root and add the following environment variables:
    ```
    PORT=4000
    JWT_SECRET=your_jwt_secret_key
    MONGO_URL=your_mongodb_connection_string
    ```

### Running the Server

Start the server using:

```
npm start
```

The server will run on `http://localhost:4000` (or the PORT defined in your `.env` file).

## API Documentation

### Users

#### Register User

**Endpoint:** `/users/register`  
**Method:** `POST`

**Description:**  
Registers a new user by creating a user account with the provided information.

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- **201 Created**  
  ```json
  {
    "token": "JWT token string",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // plus any additional fields
    }
  }
  ```

- **400 Bad Request**  
  Returned if validation fails. Example:
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```


```
UBER-CLONE/
└── Backend/
    ├── controllers/
    │   └── user.controller.js
    ├── db/
    │   └── db.js
    ├── models/
    │   └── user.model.js
    ├── routes/
    │   └── user.routes.js
    ├── services/
    │   └── user.service.js
    ├── .env
    ├── package.json
    └── server.js
```

## Technologies Used

- Node.js
- Express
- MongoDB (mongoose)
- JSON Web Tokens (jsonwebtoken)
- bcrypt for password hashing
- express-validator for request validation
- cors

## License

This project is licensed under the MIT License.