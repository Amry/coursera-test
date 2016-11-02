(function () {

	'use strict';

	angular.module('MenuApp', ['ui.router', 'data']);

	angular.module('MenuApp')
		.config(RoutingConfig);

	RoutingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutingConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('home', {
				url: '/home',
				template: '<div> Welcome to Menu App</div>'
			})
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/categories.html',
				constroller: 'Category as catCtrl',
				resolve: {
					catData: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
          }]
				}
			})
			.state('categories.items', {
				urL: 'items',
				templateUrl: 'src/items.html'
			})
	}

})();
