# Backend API Documentation

---

## /users/register Endpoint

**Description:**  
Registers a new user by creating a user account with the provided information.

**HTTP Method:**  
`POST`

**Request Body:**  
The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

> **Example Request Body:**
> ```json
> {
>   "fullname": {
>     "firstname": "John",
>     "lastname": "Doe"
>   },
>   "email": "john.doe@example.com",
>   "password": "password123"
> }
> ```

**Example Response:**  
```json
{
  "token": "JWT token string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**
- **400 Bad Request:** Returned when required fields are missing or invalid, or if the user already exists.

---

## /users/login Endpoint

**Description:**  
Authenticates a user using their email and password, returning a JWT token upon successful login.

**HTTP Method:**  
`POST`

**Request Body:**  
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Example Response:**  
```json
{
  "token": "JWT token string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**
- **400 Bad Request:** For validation errors (e.g., invalid email format, password too short).
- **401 Unauthorized:** If the provided credentials are incorrect.

---

## /users/profile Endpoint

**Description:**  
Retrieves the profile information of the currently authenticated user.

**HTTP Method:**  
`GET`

**Authentication:**  
Requires a valid JWT token in the Authorization header.  
Example header:
```
Authorization: Bearer <JWT token>
```

**Example Response:**  
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**
- **401 Unauthorized:** If no valid token is provided or the token is blacklisted.

---

## /users/logout Endpoint

**Description:**  
Logs out the current user. The endpoint clears the token stored as a cookie and adds the token to a blacklist so that it cannot be used for subsequent authenticated requests.

**HTTP Method:**  
`GET`

**Authentication:**  
Requires a valid JWT token (passed either via cookie or in the Authorization header).

**Example Response:**  
```json
{
  "message": "Logged out"
}
```

**Error Responses:**
- **401 Unauthorized:** If the token is missing or invalid.

---

## /captains/register Endpoint

**Description:**  
Registers a new captain by creating a captain account with the provided information.

**HTTP Method:**  
`POST`

**Request Body:**  
The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, optional): Captain's last name.
- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1).
  - `vehicleType` (string, required): Type of vehicle (must be `'car'`, `'motorcycle'`, or `'auto'`).

> **Example Request Body:**
> ```json
> {
>   "fullname": {
>     "firstname": "Jane",
>     "lastname": "Doe"
>   },
>   "email": "jane.doe@example.com",
>   "password": "password123",
>   "vehicle": {
>     "color": "red",
>     "plate": "MP 04 XY 6204",
>     "capacity": 3,
>     "vehicleType": "car"
>   }
> }
> ```

**Example Response:**  
```json
{
  "token": "JWT token string",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

**Error Responses:**
- **400 Bad Request:** If validation fails or if a captain with the provided email already exists.

---

## /captains/login Endpoint

**Description:**  
Authenticates a captain using their email and password, returning a JWT token upon successful login.

**HTTP Method:**  
`POST`

**Request Body:**  
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

**Example Response:**  
```json
{
  "token": "JWT token string",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    },
    "status": "active"
  }
}
```

**Error Responses:**
- **400 Bad Request:** For validation errors.
- **401 Unauthorized:** If the provided credentials are incorrect.

---

## /captains/profile Endpoint

**Description:**  
Retrieves the profile information of the currently authenticated captain.

**HTTP Method:**  
`GET`

**Authentication:**  
Requires a valid JWT token in the Authorization header.  
Example header:
```
Authorization: Bearer <JWT token>
```

**Example Response:**  
```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "MP 04 XY 6204",
      "capacity": 3,
      "vehicleType": "car"
    },
    "status": "active"
  }
}
```

**Error Responses:**
- **401 Unauthorized:** If no valid token is provided or the token is blacklisted.

---

## /captains/logout Endpoint

**Description:**  
Logs out the current captain by clearing the token stored as a cookie and adding the token to a blacklist so that it can no longer be used.

**HTTP Method:**  
`GET`

**Authentication:**  
Requires a valid JWT token passed either in the Authorization header or as a cookie.

**Example Response:**  
```json
{
  "message": "Logged out"
}
```

**Error Responses:**
- **401 Unauthorized:** If the token is missing or invalid.

---

## /maps/get-coordinates Endpoint

**Description:**  
Retrieves the coordinates (latitude and longitude) for a given address.

**HTTP Method:**  
`GET`

**Request Parameters:**  
- `address` (string, required): The address for which to retrieve coordinates.

**Example Request:**  
```
GET /maps/get-coordinates?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA
```

**Example Response:**  
```json
{
  "lat": 37.4224764,
  "lng": -122.0842499
}
```

**Error Responses:**
- **400 Bad Request:** If the address parameter is missing/invalid.
- **404 Not Found:** If the coordinates for the given address cannot be found.

---

## /maps/get-distance-time Endpoint

**Description:**  
Retrieves the distance and estimated travel time between two locations.

**HTTP Method:**  
`GET`

**Request Parameters:**  
- `origin` (string, required): The starting address or location.
- `destination` (string, required): The destination address or location.

**Example Request:**  
```
GET /maps/get-distance-time?origin=New+York,NY&destination=Los+Angeles,CA
```

**Example Response:**  
```json
{
  "distance": {
    "text": "2,789 miles",
    "value": 4486540
  },
  "duration": {
    "text": "1 day 18 hours",
    "value": 154800
  }
}
```

**Error Responses:**
- **400 Bad Request:** If required parameters are missing/invalid.
- **404 Not Found:** If the distance and travel time cannot be determined.

---

## /maps/get-suggestions Endpoint

**Description:**  
Retrieves autocomplete suggestions for a given input string.

**HTTP Method:**  
`GET`

**Request Parameters:**  
- `input` (string, required): The input string for which to retrieve suggestions.

**Example Request:**  
```
GET /maps/get-suggestions?input=1600+Amphitheatre
```

**Example Response:**  
```json
[
  "1600 Amphitheatre Parkway, Mountain View, CA, USA",
  "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
]
```

**Error Responses:**
- **400 Bad Request:** If the input parameter is missing/invalid.
- **500 Internal Server Error:** If suggestions cannot be retrieved.

---

## /rides/create Endpoint

**Description:**  
Creates a new ride with the provided information.

**HTTP Method:**  
`POST`

**Authentication:**  
Requires a valid JWT token in the Authorization header:  
```
Authorization: Bearer <JWT token>
```

**Request Body:**  
```json
{
  "pickup": "123 Main St, City",
  "destination": "456 Elm St, City",
  "vehicleType": "car"
}
```

**Example Response:**  
```json
{
  "ride": {
    "user": "user_id",
    "pickup": "123 Main St, City",
    "destination": "456 Elm St, City",
    "fare": 75,
    "status": "pending",
    "duration": 3600,
    "distance": 8000,
    "otp": "123456"
  }
}
```

**Error Responses:**
- **400 Bad Request:** If any required field is missing/invalid.
- **500 Internal Server Error:** On a ride creation error.

---

## /rides/get-fare Endpoint

**Description:**  
Retrieves the fare estimate for a ride between the provided pickup and destination addresses.

**HTTP Method:**  
`GET`

**Authentication:**  
Requires a valid JWT token in the Authorization header.

**Request Parameters:**  
- `pickup` (string, required)
- `destination` (string, required)

**Example Request:**  
```
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway,+Mountain+View,+CA&destination=1+Infinite+Loop,+Cupertino,+CA
```

**Example Response:**  
```json
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 40.0
}
```

**Error Responses:**
- **400 Bad Request:** If required parameters are missing/invalid.
- **500 Internal Server Error:** On fare calculation error.

---

*This documentation provides an overview of all major endpoints in the backend API along with their request requirements, example responses, and error messages. Adjust the details as needed to match your API's actual behavior.*