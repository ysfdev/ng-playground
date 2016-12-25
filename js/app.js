(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('MyAppController', MyAppController);

  MyAppController.$inject = ["$scope"];

  function MyAppController($scope) {
    $scope.test = "Hello";
    $scope.projectsList = [
      // {
      //   "name": "Todos App",
      //   "description" : "A todo app to keep track of tasks",
      //   "link" : ""
      // },
      {
        "name": "Lunch Checker",
        "description" : "A simple lunch Checker",
        "link" : ""
      }
    ];
  }
})();