const express = require('express');
const sql = require('mssql');  // Import the mssql library
const userRoutes = require('./routes/users');  // Import your user routes

const app = express();
app.use(express.json());

// Database configuration
const config = {
    user: process.env.DB_USER,        // Pulled directly from Azure configuration
    password: process.env.DB_PASSWORD, // Pulled directly from Azure configuration
    server: process.env.DB_SERVER,    // Pulled directly from Azure configuration
    database: process.env.DB_NAME,    // Pulled directly from Azure configuration
    options: {
        encrypt: true,                // Required for Azure SQL
        enableArithAbort: true
    }
};

// Global variable to store the database connection
let dbConnection = null;

// Function to establish and maintain the database connection
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        dbConnection = pool;
        console.log('Connected to the Azure SQL database successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);  // Exit the application if database connection fails
    }
}

// Middleware to inject the database connection into each request
app.use((req, res, next) => {
    if (!dbConnection) {
        return res.status(500).json({ error: 'Database connection not established' });
    }
    req.db = dbConnection;  // Attach the connection pool to each request
    next();
});

app.use('/api/users', userRoutes);

// Start the server
const port = process.env.PORT;  // Use Azure-provided PORT or fall back to 3000 for local dev

app.listen(port, async () => {
    console.log(`Server is starting on port ${port}`);
    
    // Ensure that the database connection is established before handling any requests
    await connectToDatabase();
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
