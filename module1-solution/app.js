(function() {

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.errorMessage = '';

    $scope.checkIt = function(items) {
      if (!items ) {
        $scope.errorMessage = "Please enter data first!"
      } else {
        var lunchItems = cleanUp(items);
        if (lunchItems.length>0) {
          if (lunchItems.length <= 3) {
            $scope.errorMessage = "Enjoy!"
          } else {
              $scope.errorMessage = "Too much!";
          }
        }else {
          $scope.errorMessage = "Your input is empty";
        }

      }

    }

    function cleanUp(item) {
      var itemArray = item.split(",");
      var arrayToReturn = [];
      itemArray.forEach(function(currentItem, index, array) {
        if (currentItem || !currentItem ==="")
          arrayToReturn.push(currentItem);
      });
      console.log(arrayToReturn);
      return arrayToReturn;
    }
  }
})();
