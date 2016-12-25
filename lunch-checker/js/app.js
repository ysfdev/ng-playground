(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController ($scope) {
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      $scope.invalidInput = false;
      $scope.enableSuccessBorderColor = false;
      if ($scope.lunchItems !== "" && typeof $scope.lunchItems !== 'undefined' ) {
        let itemsTotal = calculateTotalItems($scope.lunchItems);
        if (itemsTotal <= 3) {
          $scope.message = "Enjoy!";
          $scope.enableSuccessBorderColor = true;
        } else {
          $scope.message = "Too Much!";
          $scope.enableSuccessBorderColor = true;
        }
      } else {
        $scope.invalidInput = true;
        $scope.message = "Please enter data first.";
      }
    }
  }

  function calculateTotalItems (itemsString) {
    let totalCount = 0;
    if (typeof itemsString !== 'undefined') {
      let itemsArray = itemsString.split(',');
      for( let i = 0; i < itemsArray.length; i++) {
        //Only count items that are not empty
        if (itemsArray[i] !== "") {
          totalCount += 1;
        }
      }
    }
    return totalCount;
  }
})();
