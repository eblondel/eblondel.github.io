/**
 * Main app
 */

/**
 * Modules
 */

angular.module('home',['pascalprecht.translate']);
angular.module('services',['pascalprecht.translate']);
angular.module('rpackages',['pascalprecht.translate']);

/**
 * Main application declaration
 */
angular.module('MyWebsite', ['ngRoute', 'pascalprecht.translate', 'home', 'services', 'rpackages']);

angular.module('MyWebsite')
.config(
		
  ['$routeProvider', '$translateProvider', '$translatePartialLoaderProvider',
    function($routeProvider, $translateProvider, $translatePartialLoaderProvider) {
	  
	  $translatePartialLoaderProvider.addPart('common');
	  $translatePartialLoaderProvider.addPart('home');
	  $translateProvider.useLoader('$translatePartialLoader', {
		  urlTemplate: 'i18n/{part}/{lang}.json'
	  })
	  $translateProvider.determinePreferredLanguage();
	  
      $routeProvider
        .when('/', {
          templateUrl: './app/modules/home/views/home.tpl.html',
          controller: 'HomeCtrl'
        })
        .when('/home', {
          templateUrl: './app/modules/home/views/home.tpl.html',
          controller: 'HomeCtrl'
        })
        .when('/services', {
          templateUrl: './app/modules/services/views/services.tpl.html',
          controller: 'ServicesCtrl'
        })
        .when('/r', {
          templateUrl: './app/modules/R/views/r.tpl.html',
          controller: 'RCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });
  }]);


angular.module("MyWebsite").controller('MainCtrl',
		[ '$translate', '$scope', '$location', function($translate, $scope, $location) {
			
			//language
			$scope.language = $translate.preferredLanguage();
			
			$scope.changeLanguage = function(langKey) {
				$translate.use(langKey);
				$scope.language = langKey;
			};
			
			
			//location
			$scope.goTo = function(page) {
				$location.path('/'+page);
			}
			
		} ]);

angular.module("MyWebsite").controller('FooterCtrl',
		['$scope', function($scope) {
			
			$scope.year = new Date();
			
		}]);
