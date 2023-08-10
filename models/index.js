// Import User and Thought models
const UserModel = require("./User");
const ThoughtModel = require("./Thought");

// Export the models as an object for easy access
module.exports = {
  User: UserModel,
  Thought: ThoughtModel,
};
