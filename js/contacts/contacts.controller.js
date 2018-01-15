(function () {


	$.validator.addMethod('tel', function (value, element) {
		return /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/g.test(value);
	});
	angular
		.module('app')
		.controller('contactsController', contactsController);

	function contactsController($http) {
		$scope.send = function () {
			$http({
				url: appSettings.baseApiUrl + 'messages',
				method: 'POST',
				data: {
					name: $scope.model
				}
			})
		}
	}
})();
