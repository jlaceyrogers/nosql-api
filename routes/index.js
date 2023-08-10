// Import the necessary modules for creating an Express router
const router = require("express").Router();

// Import the API routes
const apiRoutes = require("./api");

// Define a route for handling API requests by using the imported API routes
router.use("/api", apiRoutes);

// Define a default route handler for handling incorrect routes
router.use((req, res) => {
  return res.send("Wrong route!");
});

// Export the router to make it available to other parts of the application
module.exports = router;
