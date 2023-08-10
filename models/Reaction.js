// Import necessary modules from mongoose and dateFormat utility
const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Define the reaction schema
const reactionSchema = new Schema(
  {
    // Reaction ID is an automatically generated ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Reaction body with a maximum length of 280 characters
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Username of the user who created the reaction
    username: {
      type: String,
      required: true,
    },
    // Creation timestamp of the reaction, formatted using dateFormat utility
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
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

// Export the reaction schema
module.exports = reactionSchema;
