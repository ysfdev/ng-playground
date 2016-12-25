'use strict';

var angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };

  this.deleteTodo = function(todo)  {
      var todoId = todo._id
      $http.post(`/api/todos/del/${todo._id}`).then(function(response) {
          return console.log(response.data.todo.name + ' Todo deleted');
      })
      return $q.resolve('Todo deleted')
  };

  this.saveTodos = function(todos) {
    var queue = [];
    todos.forEach(function(todo) {
        var request;
        if(!todo._id) {
            request = $http.post('/api/todos', todo)
        } else {
            request = $http.put(`/api/todos/${todo._id}`, todo).then(function(result){
                todo = result.data.todo;
            })
        }
        queue.push(request);
    });
    return $q.all(queue).then(function(results) {
        console.log(`I saved ${todos.length} todos`);
    });
  };

});
