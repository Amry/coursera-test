(function() {

    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .factory('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        this.found = "";
        this.requestTheItem = function() {
            this.message = "";
            var item = this.searchItem;
            if (!item) {
                  this.message = "Nothing Found!";
                  return;
            }
            this.found = MenuSearchService.getMatched(item);
        };
        this.remove = function (index) {
            this.found.splice(index, 1);
        }
    }

    function MenuSearchService() {

      init();

      function init() {}

      return {
           getMatched: getMatchedItems
      }

      function getMatchedItems(searchTerm) {
          return [{
             name: "Perfecto",
             short_name: "shortName",
             description: "description"
          }];
      };

    }

    function foundItemsDirective() {
        return {
            restrict: 'E',
            scope: {
                onRemove: '&remove',
                foundItems: '<'
            },
            templateUrl: 'foundItems.tpl.html',
            controller: foundItemsDirectiveController,
            controllerAs: 'list',
            link: foundItemsDirectiveLink

        }

        function foundItemsDirectiveLink(scope, element, attrs, controller) {
            if (angular.isUndefined(attrs.foundItems) || angular.isUndefined(attrs.remove)) {
                throw new Error('The required attributes are not found!');
            }
        }

        function foundItemsDirectiveController($scope) {

        }
    }


})();
