(function() {

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.errorMassage = '';

    $scope.checkIt = function(items) {
      if (!items ) {
          $scope.errorMassage = "Please enter data first!";
          $scope.massageClass = "alert alert-warning";
      } else {
          var lunchItems = cleanUp(items);
          if (lunchItems.length>0) {
              if (lunchItems.length <= 3) {
                  $scope.massageClass = "alert alert-success";
                  $scope.errorMassage = "Enjoy!";
                } else {
                  $scope.errorMassage = "Too much!";
                  $scope.massageClass = "alert alert-success";
                }
          }else {
                $scope.errorMassage = "Your input is empty";
                $scope.massageClass = "alert alert-success";
          }
      }
    }

    function cleanUp(item) {
      var itemArray = item.split(",");
      var arrayToReturn = [];
      itemArray.forEach(function(currentItem) {
        if (currentItem.trim().length > 0)
          arrayToReturn.push(currentItem);
      });
      return arrayToReturn;
    }
  }
})();
