(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
      this.Items = ShoppingListCheckOffService.getBuyItems();
      this.removeItem = function (itemIndex) {
          ShoppingListCheckOffService.removeItem(itemIndex);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      this.Items = ShoppingListCheckOffService.getBoughtItems();
      console.log("Bought Items: " + this.Items);
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
      addItem(buyList[itemIndex]);
      buyList.splice(itemIndex, 1);
    };

    var addItem = function(items) {
      boughtList.push(items);
    }

    this.getBuyItems = function() {
      return buyList;
    };

    this.getBoughtItems = function() {
      return boughtList;
    }

  }

}) ();
