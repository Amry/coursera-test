(function () {

	'use strict';

	angular.module('restaurant')
		.factory('userData', userDataService);

	userDataService.$inject = ['$http'];

	function userDataService($http) {
		var userDetails = {};

		return {
			getDetails: get,
			setDetails: set,
			checkMenuNumber: check
		}

		function get() {
			return details;
		}

		function set(data) {
			if (angular.isDefined(data) && angular.isObject(data)) {
				userDetails.fname = data.fname;
				userDetails.lname = data.lname;
				userDetails.email = data.email;
				userDetails.phoneN = data.phoneN;
				userDetails.fDish = data.fDish;
			} else {
				return undefined;
			}

		}

		function check(short_name) {
			var menu_items = {
				url: 'http://amry87-module5.herokuapp.com/menu_items.json?short_name=',
				method: 'GET',
				params: {
					short_name: short_name
				}
			};

			function isThere(name) {
				return name.short_name === short_name;
			}

			var httpRequest = $http(menu_items)
				.then(function (response) {
					return response.data.menu_items.find(isThere);
				})
				.catch(function (error) {
					console.log('could not get categories from server', error);
				});

			return httpRequest;
		}

	}

})()
