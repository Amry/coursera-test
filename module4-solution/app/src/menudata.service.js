(function () {
	'use strict'

	angular.module('data')
		.factory('MenuDataService', MenuDataService);
	MenuDataService.$inject = ['$http'];

	function MenuDataService($http) {
		return {
			getAllCategories: getAllCategories,
			getItemsForCategory: getItemsForCategory
		}

		var baseUrl = 'https://davids-restaurant.herokuapp.com/';
		var getCategoryRequest = {
			url: baseUrl + 'categories.json',
			method: get
		};

		function getAllCategories() {
			var promise = httpGetRequest.then(function (response) {
					return response.data;
				})
				.catch(function (error) {
					console.log('something went wrong while requesting categories');
				});

			return promise;
		}

		var getItemsRequest = {
			url: baseUrl + 'menu_items.json?category=',
			method: get
		};

		function getItemsForCategory(categoryShortName) {
			getItemsRequest.params = {
				category: categoryShortName
			};

			var promise = getItemsRequest.then(function (response) {
					return response.data;
				})
				.catch(function (error) {
					console.log('could not get items for category', categoryShortName);
				});

			return promise;
		}
	}


})()

})()
