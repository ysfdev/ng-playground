webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.controller('mainCtrl', function($scope, $log, $interval, dataService){
	  $scope.seconds = 0;
	    $scope.counter = function() {
	        $scope.seconds++
	        $log.log($scope.seconds + ' have passed!');
	    }
	  $interval($scope.counter, 1000, 10);
	  dataService.getTodos(function(response){
	    var todos = response.data.todos;
	    $scope.todos =  todos;
	    });

	  $scope.addTodo = function() {
	    $scope.todos.unshift({name: "This is a new todo.",
	                      completed: false});
	  };

	})


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.directive('todo', function(){
	  return {
	    templateUrl: 'templates/todo.html',
	    replace: true,
	    controller: 'todoCtrl'
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ }
]);