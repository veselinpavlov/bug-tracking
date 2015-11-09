(function() {
	var module = angular.module('bugTracker');

	var NavController = function($scope) {
		console.log("It's Alive!");

		$scope.login = function(formData) {
			console.log($scope.username);
			console.log($scope.password);
		};
	};

	module.controller('NavController', ['$scope', NavController]);
}());