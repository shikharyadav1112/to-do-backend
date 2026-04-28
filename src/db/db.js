const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/toDoProject");
  console.log("connected to DB");
}

module.exports = connectDb;
