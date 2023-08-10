// Import necessary modules from mongoose
const { Schema, model } = require("mongoose");
// Import the reaction schema and dateFormat utility
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

// Define the thought schema
const thoughtSchema = new Schema(
  {
    // Text of the thought with character limits
    thoughtText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },
    // Creation timestamp of the thought, formatted using dateFormat utility
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    // Username of the user who created the thought
    username: {
      type: String,
      required: true,
    },
    // Array of reactions associated with the thought, using the reactionSchema
    reactions: [reactionSchema],
  },
  {
    // Include getters to format createdAt timestamp
    toJSON: {
      getters: true,
    },
    // Exclude 'id' field from being output in the schema
    id: false,
  }
);

// Define a virtual property to calculate the number of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const Thought = model("Thought", thoughtSchema);

// Export the Thought model
module.exports = Thought;
