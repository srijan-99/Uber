const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser=require('cookie-parser')

const connectDb=require('./db/db')

const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const mapRoutes=require('./routes/map.routes')
const PORT=process.env.PORT || 8080;






app.use(cors());
app.use(express.json()); // Middleware to parse JSON request body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(cookieParser());

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Request body:', req.body); // Log the request body for debugging
    next();
});

connectDb();

//routes
app.get('/', (req, res) => {
    res.send(`Hello World`);
});

// Ensure '/users' routes are correctly configured
app.use('/users', userRoutes)
app.use('/captains',captainRoutes)
app.use('/maps',mapRoutes)

app.listen(PORT,()=>{
    console.log(`Server is listening on the ${PORT}`)
})
