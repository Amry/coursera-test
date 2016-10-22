(function(){

    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .factory('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var item = this.searchItem;
        var found = this.foundItems;
        this.requestTheItem = function(item) {
            console.log(item);
            found = MenuSearchService.getMatchedMenuItems(item);
        }
    };

    funmction MenuSearchService() {

        this.getMatchedMenuItems = function(searchTerm) {

        };

    }


})();
