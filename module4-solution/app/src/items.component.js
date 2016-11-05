(function () {
	'use strict'

	angular.module('MenuApp')
		.component('itemList', {
			templateUrl: 'app/view/items.tpl.html',
			bindings: {
				items: '<'
			}
		});
})()
