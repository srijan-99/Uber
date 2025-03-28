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
      // other fields as applicable
    }
  }
  ```
  
- **400 Bad Request**  
  Returned if validation fails (e.g., missing fields, invalid email, etc.).

---

#### Login User

**Endpoint:** `/users/login`  
**Method:** `POST`

**Description:**  
Authenticates a user using their email and password, returning a JWT token upon successful login.

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- **200 OK**  
  ```json
  {
    "token": "JWT token string",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other fields as applicable
    }
  }
  ```
  
- **401 Unauthorized**  
  Returned if the authentication fails or if the email/password combination is incorrect.

---

#### Get User Profile

**Endpoint:** `/users/profile`  
**Method:** `GET`

**Description:**  
Fetches the authenticated user’s profile. This is a protected route and requires a valid JWT token. The token can be provided in either a cookie or an Authorization header (Bearer token).

**Authentication:**  
Make sure to include the JWT token either as a cookie named `token` or in the header:
```
Authorization: Bearer <JWT token>
```

**Response:**

- **200 OK**  
  ```json
  {
    "user": {
      "_id": "user id string",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```
  
- **401 Unauthorized**  
  Returned if no valid token is provided or if the token has been blacklisted.

---

#### Logout User

**Endpoint:** `/users/logout`  
**Method:** `GET`

**Description:**  
Logs out the user by clearing the `token` cookie and adding the current token to a blacklist so that it cannot be used again for authentication.

**Flow:**

1. The server clears the `token` cookie from the client.
2. It retrieves the token from the incoming request (from cookies or the Authorization header).
3. The token is saved to the BlacklistToken collection, ensuring any further request using that token is rejected for the remainder of its validity period.

**Response:**

- **200 OK**  
  ```json
  {
    "message": "Logged out"
  }
  ```

---

Make sure your client application sends the token appropriately (either via a cookie or the Authorization header) and that your middleware in the server is configured to read cookies (using cookie-parser) and headers.