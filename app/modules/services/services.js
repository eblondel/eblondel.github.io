/**
 * 
 */

/**
 * Services module
 * 
 */


angular.module('services').controller('ServicesCtrl',
		[ '$scope', '$location', function($scope, $location) {

			$scope.services = [
				{
					category: 'SERVICE_GIS',
					items: ['SERVICE_GIS_DESKTOP', 'SERVICE_GIS_SDI', 'SERVICE_GIS_MAPS', 'SERVICE_GIS_OPENSOURCE']
				},
				{
					category: 'SERVICE_R',
					items: ['SERVICE_R_OPENSOURCE', 'SERVICE_R_RND',  'SERVICE_R_PROD', 'SERVICE_R_WEB']
				},
				{
					category: 'SERVICE_SI',
					items: ['SERVICE_SI_AUDIT', 'SERVICE_SI_DEV',  'SERVICE_SI_GIS']
				},
				{
					category: 'SERVICE_OTHER',
					items: ['SERVICE_OTHER_CONFERENCES', 'SERVICE_OTHER_TRANSLATE']
				}
			];

		} ]);