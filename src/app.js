const express = require("express");
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "https://your-frontend-url.onrender.com",
  }),
);

const toDoModel = require("./models/models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  const { title } = req.body;

  const newTodo = await toDoModel.create({
    title,
    completed: false,
  });
  // console.log(req.body.title);c

  res.json(newTodo);
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await toDoModel.find();
    // console.log(todos);
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    await toDoModel.findByIdAndDelete(id);

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { completed } = req.body;

    await toDoModel.findByIdAndUpdate(id, {
      completed: completed,
    });

    res.json({ message: "Task updated" });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

module.exports = app;
