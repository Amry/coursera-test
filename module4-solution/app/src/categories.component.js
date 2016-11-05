(function () {
	'use strict'

	angular.module('MenuApp')
		.component('categoryList', {
			templateUrl: 'app/view/category.tpl.html',
			bindings: {
				categories: '<'
			}
		});
})()
