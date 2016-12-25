'use strict';

angular.module('todoListApp')
.controller('todoCtrl', function($scope, $log, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo).then(function(err, response) {
        if(err) {
            console.log(err);
        } else {
         console.log(response);
        }
    });
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos)
    .finally($scope.resetTodoState());
  };
  $scope.resetTodoState = function(todo) {
      todo.edited = false
  }
});
