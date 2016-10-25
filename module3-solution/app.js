(function() {

    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .factory('MenuSearchService', MenuSearchService)
    .constant('baseAPI', 'https://davids-restaurant.herokuapp.com/')
    .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.found = "";
        menu.requestTheItem = function() {
            menu.message = "";
            menu.found = "";
            var item = menu.searchItem;
            if (!item) {
                  menu.message = "Nothing Found!";
                  return;
            }
            var promise = MenuSearchService.getMatched(item);
            promise.then(function (foundItems) {
                if (foundItems.length === 0) {
                    menu.message = "Nothing found!";
                    return;
                }
                menu.found = foundItems;
            })
            .catch(function (error) {
                menu.message = error;
            })
        };
        menu.remove = function (index) {
            menu.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ["$http", "baseAPI", "$q"];
    function MenuSearchService($http, baseAPI, $q) {
      var getRequest = {
          url: baseAPI + "menu_items.json",
          method: "GET",
      }

      init();

      function init() {}

      return {
           getMatched: getMatchedItems
      }

      function getMatchedItems(searchTerm) {
        var deferred = $q.defer();
        var found = [];

        getRequest.params = {
            description: searchTerm
        }
        var httpRequest = $http(getRequest);
        httpRequest.then(function (response) {
            var items = response.data.menu_items;
            angular.forEach(items, function(item) {
                if (item.description.indexOf(searchTerm) !== -1) {
                    found.push(item);
                }
            });
            deferred.resolve(found);
        })
        .catch(function (error) {
            deferred.reject(error);
            console.log("something went wrong!");
        });

        return deferred.promise;
      }

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
            bindToController: true,
            link: foundItemsDirectiveLink
        }

        function foundItemsDirectiveLink(scope, element, attrs, controller) {
            if (angular.isUndefined(attrs.foundItems) || angular.isUndefined(attrs.remove)) {
                throw new Error('The required attributes are not found!');
            }
        }

        function foundItemsDirectiveController() {
            var list = this;
        }
    }


})();
