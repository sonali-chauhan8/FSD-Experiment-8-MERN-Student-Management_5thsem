const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * Supports both local MongoDB (mongodb://127.0.0.1:27017/...) and MongoDB Atlas cloud
 */
const connectDB = async () => {
  try {
    const connUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/student_management_db';
    
    // Mask credentials if present for secure logging
    const maskedUri = connUri.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    console.log(`[Database] Connecting to: ${maskedUri}`);

    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });

    console.log(`[Database] MongoDB Connected successfully!`);
    console.log(`[Database] Host: ${conn.connection.host}`);
    console.log(`[Database] Database Name: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Connection failed: ${error.message}`);
    console.error(`
---------------------------------------------------------------
Troubleshooting Tips for Experiment No. 8:
1. If using Local MongoDB:
   - Ensure the MongoDB server is running (Run: 'mongod' or check Windows Services).
   - Default URI: mongodb://127.0.0.1:27017/student_management_db
2. If using MongoDB Atlas (Cloud):
   - Check that backend/.env has the correct MONGODB_URI.
   - Verify IP Access List in Atlas Network Access includes your IP or 0.0.0.0/0.
   - Verify database username and password in the connection string.
---------------------------------------------------------------
`);
    // Do not terminate process in dev so the server can report connection errors gracefully
    return null;
  }
};

module.exports = connectDB;
