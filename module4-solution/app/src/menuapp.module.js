(function () {

	'use strict';

	angular.module('MenuApp', ['ui.router', 'data']);

	angular.module('MenuApp')
		.config(RoutingConfig);

	RoutingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutingConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/categories.html'
			})

		.state('items', {
			urL: 'items',
			templateUrl: 'src/items.html'
		})
	}

})();
