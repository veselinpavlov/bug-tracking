(function() {
	var app = angular.module('bugTracker', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'app/views/main.html',
				controller: 'MainController'
			})
			.when('/login', {
				templateUrl: 'app/views/login.html',
				controller: 'LoginController'
			})
			.otherwise({
				redirectTo: '/main'
			});
	}]);
}());