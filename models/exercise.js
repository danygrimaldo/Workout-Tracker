//Using the activities for a foundation for the models
//looking for the proper format to label these js files
//Will work with TAs before class to get this going

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
