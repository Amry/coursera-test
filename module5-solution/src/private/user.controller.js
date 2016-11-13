(function () {
	'use strict';

	angular.module('restaurant')
		.controller('signUpCtrl', signUpCtrl);

	signUpCtrl.$inject = ['userData', '$scope'];

	function signUpCtrl(userDataService, $scope) {
		$scope.user = {
			fname: "",
			lname: "",
			email: "",
			phoneN: "",
			menuN: "",
		};

		$scope.user.info = "Not Signed Up Yet. Sign up Now!";

		$scope.user.signUp = function () {
			$scope.isInvalid = false;
			$scope.isSigned = false;
			var promise = userDataService.checkMenuNumber($scope.user.menuN)
				.then(function (data) {
					if (angular.isObject(data) && data.short_name) {
						$scope.isSigned = true;
					}

					if ($scope.isSigned) {
						$scope.isInvalid = false;
						userDataService.setDetails($scope.user);
						$scope.user.info = $scope.user;

					} else {
						$scope.isInvalid = true;
					}

				});

		}
	}

})()
