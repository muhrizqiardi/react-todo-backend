const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');
const { todoAll, todoAdd, todoDelete, todoCheck } = require('./controllers/todoController');
require('custom-env').env();

const app = express();
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        // Listen to the port
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });

        // Logs
        console.log('Connected to DB')
    })
    .catch((err) => {
        console.log(err)
    });

app.get("/", (req, res) => {
    res.send("<p>Welcome to To Do API</p>")
})

app.get("/todo", (req, res) => {
    res.sendFile("./todo.json");
})

// Get all of todos
app.get("/api/todo", todoAll);

// Post a new todo
app.post("/api/todo", todoAdd);

// Delete a todo
app.delete("/api/todo", todoDelete);

// Check a todo 
app.put("/api/todo", todoCheck);