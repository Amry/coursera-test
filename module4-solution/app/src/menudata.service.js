(function () {
	'use strict'

	angular.module('dataModule')
		.factory('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];

	function MenuDataService($http) {
		var baseUrl = 'https://davids-restaurant.herokuapp.com/';

		return {
			getAllCategories: getAllCategories,
			getItemsForCategory: getItemsForCategory
		}

		function getAllCategories() {

			var categoryRequest = {
				url: baseUrl + 'categories.json',
				method: 'GET'
			};

			var httpRequest = $http(categoryRequest)
				.then(function (response) {
					return response.data;
				})
				.catch(function (error) {
					console.log('could not get categories from server', error);
				});

			return httpRequest;
		}

		function getItemsForCategory(categoryShortName) {

			var getItemsRequest = {
				url: baseUrl + 'menu_items.json?category=',
				method: 'GET',
				params: {
					category: categoryShortName
				}
			};

			var httpRequest = $http(getItemsRequest)
				.then(function (response) {
					return response.data;
				})
				.catch(function (error) {
					console.log('could not get items for category', categoryShortName);
				});

			return httpRequest;
		}
	}

})()
