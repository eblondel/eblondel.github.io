/**
 * 
 */

/**
 * Services module
 * 
 */

/** Services */
angular.module('services').factory('Services',
		[
		 function(){
	
			var service = {
					
			    all : function(){
					return [
						{
							id: 'gis',
							category: 'SERVICE_GIS',
							summary: 'SERVICE_GIS_SUMMARY',
							items: ['SERVICE_GIS_DESKTOP', 'SERVICE_GIS_SDI', 'SERVICE_GIS_MAPS', 'SERVICE_GIS_OPENSOURCE'],
							slides: [
								{source: "assets/services/gis_management.png", description: "SERVICE_GIS_SLIDE_MANAGEMENT"},
								{source: "assets/services/gis_modelling.png", description: "SERVICE_GIS_SLIDE_MODELLING"},
								{source: "assets/services/r_mapping.png", description: "SERVICE_GIS_SLIDE_MAPS"}
							]
						},
						{
							id: 'r',
							category: 'SERVICE_R',
							summary: 'SERVICE_R_SUMMARY',
							items: ['SERVICE_R_PROD', 'SERVICE_R_WEBDATA', 'SERVICE_R_PROCESS', 'SERVICE_R_OPENSOURCE', 'SERVICE_R_WEB', 'SERVICE_R_RND'],
							slides: [
								{source: "assets/services/r_packages.png", description: "SERVICE_R_SLIDE_PACKAGES"},
								{source: "assets/services/r_mapping.png", description: "SERVICE_R_SLIDE_MAPPING"},
								{source: "assets/services/r_si_simulation.png", description: "SERVICE_R_SLIDE_WEB_SIMULATION"},
								{source: "assets/services/r_si_execution.png", description: "SERVICE_R_SLIDE_WEB_EXECUTION"}
							]
						},
						{
							id: 'si',
							category: 'SERVICE_SI',
							summary: 'SERVICE_SI_SUMMARY',
							items: ['SERVICE_SI_AUDIT', 'SERVICE_SI_DEV',  'SERVICE_SI_GIS'],
							slides: [
								{source: "assets/services/si_fismis.png", description: "SERVICE_SI_SLIDE_WORKINGSYSTEM"},
								{source: "assets/services/si_geoforms.png", description: "SERVICE_SI_SLIDE_GEOFORMS"},
								{source: "assets/services/si_chimaera.png", description: "SERVICE_SI_SLIDE_WEBPORTAL"},
								{source: "assets/services/si_webmapping.png", description: "SERVICE_SI_SLIDE_WEBMAPPING"}
							]
						},
						{
							id: 'other',
							category: 'SERVICE_OTHER',
							summary: 'SERVICE_OTHER_SUMMARY',
							items: ['SERVICE_OTHER_DATA_ENTRY', 'SERVICE_OTHER_SUPPORT', 'SERVICE_OTHER_CONFERENCES', 'SERVICE_OTHER_TRANSLATE'],
							slides: []
						}
					];
				},
				
				getById: function(id){
					var services = this.all();
					var service = undefined;
					for(var i=0;i<services.length;i++){
						if(services[i].id === id){
							service = services[i];
							break;
						}
					}
					return service;
				}

			}
			
			return service;
			
		}]
	);
 
 /** Controllers */
angular.module('services').controller('ServicesCtrl',
		[ '$scope', '$timeout', '$location', 'Services', function($scope, $timeout, $location, Services) {

			$scope.services = [];
			$timeout(function(){
				$scope.services = Services.all();
			});
			
			$scope.goToService = function(id){
			console.log(id);
				$scope.goTo('services/'+id);
			}
		
		} ]);
		
angular.module('services').controller('GenericServiceCtrl',
		[ '$scope', '$interval', '$routeParams', 'Services', function($scope, $interval, $routeParams, Services) {
			
			// store the interval promise in this variable
			var promise;
			
			$scope.service = Services.getById($routeParams.id);
			$scope.interval = 8000;
			$scope.direction = 'left';
			$scope.currentIndex = 0;
			$scope.sliding = false;

			$scope.setCurrentSlideIndex = function (index) {
				$scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
				$scope.currentIndex = index;
			};

			$scope.isCurrentSlideIndex = function (index) {
				return $scope.currentIndex === index;
			};

			$scope.prevSlide = function () {
				$scope.direction = 'left';
				$scope.currentIndex = ($scope.currentIndex < $scope.service.slides.length - 1) ? ++$scope.currentIndex : 0;
				$scope.startSlider();
			};

			$scope.nextSlide = function () {
				$scope.direction = 'right';
				$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.service.slides.length - 1;
				$scope.startSlider();
			};
			
			$scope.startSlider = function(){
				$scope.stopSlider();
				promise = $interval(function(){
					$scope.prevSlide();
				}, $scope.interval);
				$scope.sliding = true;
			}
			
			$scope.stopSlider = function(){
				if(typeof promise != "undefined") $interval.cancel(promise);
				$scope.sliding = false;
			}
			
			$scope.$on('$destroy', function() {
			  $scope.stopSlider();
			});
			
			$scope.startSlider();

		} ]);
		
angular.module('services').animation('.slide-animation', function () {
	return {
		beforeAddClass: function (element, className, done) {
			var scope = element.scope();

			if (className == 'ng-hide') {
				var finishPoint = element.parent().width();
				if(scope.direction !== 'right') {
					finishPoint = -finishPoint;
				}
				TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
			}
			else {
				done();
			}
		},
		removeClass: function (element, className, done) {
			var scope = element.scope();

			if (className == 'ng-hide') {
				element.removeClass('ng-hide');

				var startPoint = element.parent().width();
				if(scope.direction === 'right') {
					startPoint = -startPoint;
				}

				TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
			}
			else {
				done();
			}
		}
	};
});
		
