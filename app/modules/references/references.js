/**
 * 
 */

/**
 * References module
 * 
 */


angular.module('references').controller('ReferencesCtrl',
		[ '$scope', '$translate', function($scope, $translate) {
			
			//references
			$scope.references = [
				{id: 'REF_UMANIS_R', dateStart: new Date("12/01/2014"), dateEnd: new Date("01/31/2015"), client: 'Ifremer', clientUrl: '', subcontractor: 'Umanis', subcontractorUrl: 'http://www.umanis.com'},
				{id: 'REF_UMANIS_S3E', dateStart: new Date("10/01/2014"), dateEnd: new Date("11/30/2014"), client: 'Ifremer',  clientUrl: '', subcontractor: 'Umanis', subcontractorUrl: 'http://www.umanis.com'},
				{id: 'REF_FAO_PSA_ESS', dateStart: new Date("09/01/2011"), dateEnd: new Date("09/31/2011"), client: 'FAO - Economic and Social Development Department', clientUrl: 'http://www.fao.org/economic/ess/ess-home'},
				{id: 'REF_FAO_PSA_FIP', dateStart: new Date("10/01/2010"), dateEnd: new Date("08/31/2013"), client: 'FAO - Fisheries & Aquaculture Department',  clientUrl: 'http://www.fao.org/fishery'}
			];
			
			//clients
			$scope.clients = [
				{id: 'fao', name: 'UN-FAO', url: 'http://www.fao.org'},
				{id: 'ifremer', name: 'Ifremer', url: 'http://wwz.ifremer.fr/'},
				{id: 'umanis', name: 'Umanis', url: 'http://www.umanis.com'}
			];

		} ]);
