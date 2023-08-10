// Import the necessary modules for creating an Express router
const router = require("express").Router();

// Import the user routes and thought routes
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Define the routes for users and thoughts by using the imported routes
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Export the router to make it available to other parts of the application
module.exports = router;
