(function () {
	'use strict'

	angular.module('MenuApp')
		.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['itemsList'];

	function ItemsController(itemsList) {
		this.items = itemsList.menu_items;
		this.category = itemsList.category;
	}

})()
