/**
 * Partners module
 * 
 */

//PartnersCtrl (controller)
angular.module('partners').controller('PartnersCtrl',
		[ '$scope', '$translate', '$timeout',
          function($scope, $translate, $timeout) {
			
			//collaborators
			$scope.collaborators = [];
			$timeout(function(){
				$scope.collaborators = [
					{id: 'fao', name: 'UN-FAO', url: 'http://www.fao.org'},
					{id: 'ifremer', name: 'Ifremer', url: 'http://wwz.ifremer.fr/'},
					{id: 'grida', name: 'GRID-ARENDAL', url: 'https://www.grida.no/'},
					{id: 'ird', name: 'IRD', url: 'https://www.ird.fr/'},
					{id: 'ird-marbec', name: 'IRD MARBEC Unit', url: 'http://www.umr-marbec.fr/fr/'},
					{id: 'cls', name:' CLS - Collecte Localisation Satellites', url: 'https://www.cls.fr/'},
					{id: 'cnr-isti', name: 'CNR ISTI', url: 'http://www.isti.cnr.it/'},
					{id: 'd4science', name: 'D4Science', url: 'https://www.d4science.org/'},
					{id: 'imarine', name: 'i-Marine', url: 'http://www.i-marine.eu/Pages/Home.aspx'},
					{id: 'bluebridge', name: 'BlueBridge', url: 'http://www.bluebridge-vres.eu/'},
					{id: 'cnrs', name: 'CNRS', url: 'http://www.cnrs.fr'},
					{id: 'cnrs-za', name: 'Zones Ateliers', url: 'http://www.za-inee.org/'}
				];
			});

		} ]);
