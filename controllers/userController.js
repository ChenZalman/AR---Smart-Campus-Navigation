const sql = require('mssql');
const User = require('../models/User');
const jwt = require('jsonwebtoken')

const createToken = (ID) =>{
  return jwt.sign({_id: ID},process.env.SECRET,{})
}

// Create a new user
const createUser = async (req, res) => {
    const { email, password, full_name, phone_number, admin } = req.body;
    try {
        if(!email || !password || !full_name || !phone_number){
            throw Error("All fields must be filled")
        }
        // Insert the new user into the database
        const result = await req.db.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .input('full_name', sql.VarChar, full_name)
            .input('phone_number', sql.BigInt, phone_number)
            .input('admin', sql.Int, admin)
            .query(`INSERT INTO users (email, password, full_name, phone_number, admin)
                    OUTPUT INSERTED.* 
                    VALUES (@email, @password, @full_name, @phone_number, @admin)`);

        //check if the user created
        const userRecord = result.recordset[0];
        if (!userRecord) {
            return res.status(404).json({ message: `can't create the user, try again` });
        }

        // Create a new User object
        const newUser = new User(userRecord.email, userRecord.password, userRecord.full_name, userRecord.phone_number, userRecord.admin);
        const token = createToken(userRecord.email)
        res.status(201).json({ message: 'User created successfully!', user: newUser, token });
    } catch (err) {
        console.error('Error during POST /api/users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//  login, verify the user exists in the system
const verifyUser = async (req, res) => {
    const { email, password} = req.body;
    try {
        // Insert the new user into the database
        if(!email || !password){
            throw Error("All fields must be filled")
        }
        
        const result = await await req.db.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query(`SELECT * FROM users WHERE (users.email LIKE @email) AND (users.password LIKE @password)`);
        
        // select the matched user
        const userRecord = result.recordset[0];
        if (!userRecord) {
            return res.status(404).json({ message: 'Bad credentials, try again' });
        }
        
        // Create a User object
        const user = new User(userRecord.email, userRecord.password, userRecord.full_name, userRecord.phone_number, userRecord.admin);
        const token = createToken(userRecord.email) // Here we need the user unique ID so there is a token for him
        res.status(200).json({user, token});
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: error.message });
    }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        // Fetch the user by email from the database
        const result = await req.db.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM users WHERE email = @email');
        
        const userRecord = result.recordset[0];
        if (!userRecord) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a User object
        const user = new User(userRecord.email, userRecord.password, userRecord.full_name, userRecord.phone_number, userRecord.admin);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error during GET /api/users/:email:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const result = await req.db.request().query('SELECT * FROM users');
        
        // Create User objects for each record
        const users = result.recordset.map(row => new User(row.email, row.password, row.full_name, row.phone_number, row.admin));
        res.status(200).json(users);
    } catch (err) {
        console.error('Error during GET /api/users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a user by email
const updateUser = async (req, res) => {
    const { email } = req.params;
    const { password, full_name, phone_number, admin } = req.body;
    try {
        // Update the user in the database
        const result = await req.db.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .input('full_name', sql.VarChar, full_name)
            .input('phone_number', sql.BigInt, phone_number)
            .input('admin', sql.Int, admin)
            .query(`UPDATE users 
                    SET password = @password, full_name = @full_name, 
                        phone_number = @phone_number, admin = @admin 
                    WHERE email = @email`);
        
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: 'User not found or not updated' });
        }

        // Create a User object
        const updatedUser = new User(email, password, full_name, phone_number, admin);
        res.status(200).json({ message: 'User updated successfully!', user: updatedUser });
    } catch (err) {
        console.error('Error during PUT /api/users/:email:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a user by email
const deleteUser = async (req, res) => {
    const { email } = req.params;
    try {
        // Delete the user from the database
        const result = await req.db.request()
            .input('email', sql.VarChar, email)
            .query('DELETE FROM users WHERE email = @email');
        
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: 'User not found or not deleted' });
        }
        
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (err) {
        console.error('Error during DELETE /api/users/:email:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createUser,
    verifyUser,
    getUserByEmail,
    getAllUsers,
    updateUser,
    deleteUser,
};