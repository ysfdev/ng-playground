'use strict';

var Todo = require('./models/todo.js');

var todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay dem bills"},
    {"name": "run"},
    {"name": "swim"}
]

todos.forEach(function(todo, index) {
    Todo.find({'name': todo.name}, function(err, todos) {
        if(!err && !todos.length) {
            Todo.create({completed: false, name: todo.name});
            console.log('Inserted new todo', todo.name)
        };
    });
});
