// Import necessary modules from mongoose
const { Schema, model } = require("mongoose");

// Define the user schema
const userSchema = new Schema(
  {
    // User's unique username, trimmed for whitespace
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // User's unique email, validated using a regex pattern
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    // Array of thought IDs associated with the user
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // Array of friend IDs associated with the user
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Include virtuals when converting to JSON
    toJSON: {
      virtuals: true,
    },
    // Exclude 'id' field from being output in the schema
    id: false,
  }
);

// Define a virtual property to calculate the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the userSchema
const User = model("User", userSchema);

// Export the User model
module.exports = User;
