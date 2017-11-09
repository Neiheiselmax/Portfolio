(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

  //   	$locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
            controller:"MainController",
            controllerAs:"vm",
		      }
		   }
	    })

    });

})();
