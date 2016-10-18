(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
      this.Items = ShoppingListCheckOffService.getItems(1);
      this.removeItem = function (itemIndex) {
          ShoppingListCheckOffService.removeItem(itemIndex);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      this.Items = ShoppingListCheckOffService.getItems(2);
  }

  function ShoppingListCheckOffService() {
    var boughtList = [];
    var buyList = [
            { name: "non (bread)", quantity: 5 },
            { name: "shir (milk)", quantity: 2 },
            { name: "tukhm (egg)", quantity: 10 },
            { name: "gusht (meat)", quantity: 2 },
            { name: "qand (sweets)", quantity: 20 }
    ];

    this.removeItem = function(itemIndex) {
        var item = buyList.splice(itemIndex, 1);
        boughtList.push(item[0]);
    };

    this.getItems = function(listIndex) {
      if (listIndex === 1) {
          return buyList;
      } else if (listIndex === 2) {
          return boughtList;
      }
      throw new Error("Invalid list index");
    };

  }

}) ();
