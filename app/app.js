/**
 * Main app
 */

/**
 * Modules
 */

angular.module('home',['ngSanitize', 'pascalprecht.translate', 'ui.bootstrap']);
angular.module('about',['ngSanitize', 'pascalprecht.translate']);
angular.module('services',['ngSanitize', 'ngAnimate', 'pascalprecht.translate']);
angular.module('references',['ngSanitize', 'pascalprecht.translate']);
angular.module('partners',['ngSanitize', 'pascalprecht.translate']);
angular.module('contact', ['ngSanitize', 'pascalprecht.translate']);

/**
 * Main application declaration
 */
angular.module('MyWebsite', ['ngRoute', 'ngSanitize', 'ngAnimate', 'pascalprecht.translate', 'ui.bootstrap', 'ngTable',
							 'home', 'about', 'services', 'references', 'partners', 'contact']);

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
		//services
        .when('/', {
          templateUrl: './app/modules/services/views/services.tpl.html',
          controller: 'ServicesCtrl'
        })
        .when('/services', {
          templateUrl: './app/modules/services/views/services.tpl.html',
          controller: 'ServicesCtrl'
        })
		.when('/services/:id', {
          templateUrl: './app/modules/services/views/service.tpl.html',
          controller: 'GenericServiceCtrl'
        })
		//references
		.when('/references', {
          templateUrl: './app/modules/references/views/references.tpl.html',
          controller: 'ReferencesCtrl'
        })
        //partners
		.when('/partners', {
          templateUrl: './app/modules/partners/views/partners.tpl.html',
          controller: 'PartnersCtrl'
        })
		//contact
        .when('/contact', {
          templateUrl: './app/modules/contact/views/contact.tpl.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });
  }])
  
  
.run(
		[
			'$rootScope',
			'$location',
			function($rootScope, $location) {

				$rootScope.$on("$routeChangeStart", function(event, next, current) {
					if(angular.isDefined(next.$$route)) {
						$rootScope.currentPath = next.$$route.originalPath;
						console.log($rootScope.currentPath);
					}
				});
				
			} ])


.controller('MainCtrl',
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
            
            if (!String.prototype.decodeHTML) {
              String.prototype.decode = function () {
                return this.replace(/&apos;/g, "'")
                           .replace(/&quot;/g, '"')
                           .replace(/&gt;/g, '>')
                           .replace(/&lt;/g, '<')
                           .replace(/&amp;/g, '&');
              };
            }
			
		} ])

.controller('FooterCtrl',
		['$scope', function($scope) {
			
			$scope.year = new Date();
			
		}]);
