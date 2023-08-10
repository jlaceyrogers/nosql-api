const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided URI or a default URI
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://virenderkumar23435:8zUChkjull3H0glQ@cluster0.deuxyoi.mongodb.net/"
);

// Export the database connection for use in other parts of the application
module.exports = mongoose.connection;
