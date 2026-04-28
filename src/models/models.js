const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const toDoModel = mongoose.model("toDo", toDoSchema);

module.exports = toDoModel;
