/**
 * Main app
 */

/**
 * Modules
 */

angular.module('home',['ngSanitize', 'pascalprecht.translate', 'ui.bootstrap']);
angular.module('about',['ngSanitize', 'pascalprecht.translate']);
angular.module('services',['ngSanitize', 'pascalprecht.translate']);
angular.module('references',['ngSanitize', 'pascalprecht.translate']);
angular.module('contact', ['ngSanitize', 'pascalprecht.translate']);

/**
 * Main application declaration
 */
angular.module('MyWebsite', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'ui.bootstrap',
							 'home', 'about', 'services', 'references', 'contact']);

angular.module('MyWebsite')
.config(
		
  ['$routeProvider', '$translateProvider', '$translatePartialLoaderProvider',
    function($routeProvider, $translateProvider, $translatePartialLoaderProvider) {
	  
	  //translation
	  $translateProvider.useStaticFilesLoader();
	  $translatePartialLoaderProvider.addPart('common');
	  $translatePartialLoaderProvider.addPart('about');
	  $translatePartialLoaderProvider.addPart('services');
	  $translatePartialLoaderProvider.addPart('references');
	  $translatePartialLoaderProvider.addPart('contact');
	  $translateProvider.useLoader('$translatePartialLoader', {
		  urlTemplate: 'i18n/{part}/{lang}.json'
	  })
	  $translateProvider
		.registerAvailableLanguageKeys(['en', 'fr', 'es'], {
			'en_US': 'en',
			'en_UK': 'en',
			'fr_FR': 'fr',
			'es_ES': 'es'
		}).determinePreferredLanguage();
	  $translateProvider.useSanitizeValueStrategy('sanitize');
	  $translateProvider.useMessageFormatInterpolation();
	  
	  //routes
      $routeProvider
		//home
        .when('/', {
          templateUrl: './app/modules/home/views/home.tpl.html',
          controller: 'HomeCtrl'
        })
        .when('/home', {
          templateUrl: './app/modules/home/views/home.tpl.html',
          controller: 'HomeCtrl'
        })
		//about
        .when('/about', {
          templateUrl: './app/modules/about/views/about.tpl.html',
          controller: 'AboutCtrl'
        })
		//services
        .when('/services', {
          templateUrl: './app/modules/services/views/services.tpl.html',
          controller: 'ServicesCtrl'
        })
		//references
		.when('/references', {
          templateUrl: './app/modules/references/views/references.tpl.html',
          controller: 'ReferencesCtrl'
        })
		//contact
        .when('/contact', {
          templateUrl: './app/modules/contact/views/contact.tpl.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });
  }]);


angular.module("MyWebsite").controller('MainCtrl',
		[ '$translate', '$scope', '$location', function($translate, $scope, $location) {
			
			$scope.base = (document.domain.indexOf('localhost') != - 1)? 'http://localhost/eblondel' : 'eblondel.github.io';
			
			//language
			$scope.language = $translate.preferredLanguage();
			$scope.linkedinLanguage = ($scope.language === 'en')? 'us' : $scope.language;
			$scope.viadeoLanguage = $scope.language;
			
			$scope.changeLanguage = function(langKey) {
				$translate.use(langKey);
				$scope.language = langKey;
				$scope.linkedinLanguage = ($scope.language === 'en')? 'us' : $scope.language;
				$scope.viadeoLanguage = $scope.language;
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
		
