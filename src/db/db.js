const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://yadavshikhar292_db_user:HLBIxNgruTRx0cNg@cluster0.wnkystg.mongodb.net/toDoProject",
  );
  console.log("connected to DB");
}

module.exports = connectDb;
