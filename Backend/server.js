const express = require('express');
const sql = require('mssql');  // Import the mssql library
require('dotenv').config();  // Load environment variables
const userRoutes = require('./routes/users');  // Import your user routes

const app = express();
app.use(express.json());

// Database configuration
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,  // For Azure SQL
        enableArithAbort: true
    }
};

// Connect to the database and store the connection globally
let dbConnection;

sql.connect(config).then(pool => {
    dbConnection = pool;
    console.log('Connected to the database');

    // Start the server after connection is established
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);  // Exit if connection fails
});

// Use routes and pass the DB connection to them
app.use((req, res, next) => {
    req.db = dbConnection;  // Attach the connection pool to each request
    next();
});

app.use('/api/users', userRoutes);  // Load your user routes

module.exports = app;