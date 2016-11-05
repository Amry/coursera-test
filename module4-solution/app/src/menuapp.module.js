(function () {

	'use strict';

	angular.module('MenuApp', ['ui.router', 'dataModule']);

	angular.module('MenuApp')
		.config(RoutingConfig);

	RoutingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutingConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/view/home.html'
			})

		.state('categories', {
			url: '/categories',
			templateUrl: 'app/view/categories.html',
			controller: 'CategoryController as catCtrl',
			resolve: {
				categoriesMenu: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
					}]
			}
		})

		.state('items', {
			url: '/items/{shortName}',
			templateUrl: 'app/view/items.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				itemsList: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
						return MenuDataService.getItemsForCategory($stateParams.shortName);
					}
				]
			}
		})
	}

})();
