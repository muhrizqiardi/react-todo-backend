const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	"title": String(),
	"due": String(),
	"done": Boolean()
}, {
	timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;