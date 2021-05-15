const Todo = require("../models/Todo");

// Get the whole to do list
const todoAll = (req, res) => {
    console.log(new Date().toLocaleTimeString() + " GET")
    Todo.find()
        .then((result) => {
            // console.log(result);
            res.status(200)
                .send(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Add an item to DB
const todoAdd = (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Remove an item from DB
const todoDelete = (req, res) => {
    console.log(new Date().toLocaleTimeString() + " DELETE " + req.body.id);
    console.log(req.body);
    Todo.findByIdAndDelete(req.body.id, { "useFindAndModify": false })
        .catch((error) => {
            console.log(error);
        });
}

const todoCheck = (req, res) => {
    console.log(new Date().toLocaleTimeString() + " PUT " + req.body.data.id);
    console.log(req.body.data)
    Todo.findByIdAndUpdate(req.body.data.id, { done: req.body.data.done }, { "useFindAndModify": false })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    todoAll,
    todoAdd,
    todoDelete,
    todoCheck
}