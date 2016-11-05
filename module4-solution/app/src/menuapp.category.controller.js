(function () {
	'use strict'

	angular.module('MenuApp')
		.controller('CategoryController', CategoryController);

	CategoryController.$innject = ['categoriesMenu'];

	function CategoryController(categoriesMenu) {
		this.categories = categoriesMenu;
	}

})()
