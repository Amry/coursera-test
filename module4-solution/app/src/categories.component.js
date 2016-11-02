(function () {
	'use strict'

	angular.module('MenuApp')
		.component('categories', {
			bindings: {
				recievedCategories: '<'
			}
		});
})()
