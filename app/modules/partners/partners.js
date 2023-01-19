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
					{id: 'ifremer', name: 'Ifremer', url: 'http://wwz.ifremer.fr/'},
					{id: 'linuxfoundation', name: 'The Linux Foundation', url: 'https://www.linuxfoundation.org/'},
					{id: 'rconsortium', name: 'R Consortium', url: 'https://www.r-consortium.org/'},
					{id: 'fao', name: 'UN-FAO', url: 'http://www.fao.org'},
					{id: 'ird', name: 'IRD', url: 'https://www.ird.fr/'},
					{id: 'ird-marbec', name: 'IRD MARBEC Unit', url: 'http://www.umr-marbec.fr/fr/'},
					{id: 'inrae', name: 'INRAE', url: 'https://www.inrae.fr/'},
					{id: 'inrae-dynafor', name: 'INRAE Dynafor - Dynamique et Ecologie des Paysages Agriforestiers', url: 'https://www.dynafor.fr/'},
					{id: 'inrae-agir', name: 'INRAE Agir - AGroécologie - innovations - TeRritoires', url: 'https://www6.toulouse.inrae.fr/agir'},
					{id: 'gridgeneva', name: 'GRID-Geneva', url: 'http://www.grid.unep.ch'},
					{id: 'grida', name: 'GRID-ARENDAL', url: 'https://www.grida.no/'},
					{id: 'cls', name:' CLS - Collecte Localisation Satellites', url: 'https://www.cls.fr/'},
					{id: 'cnr-isti', name: 'CNR ISTI', url: 'http://www.isti.cnr.it/'},
					{id: 'cnrs', name: 'CNRS', url: 'http://www.cnrs.fr'},
					{id: 'cnrs-za', name: 'Zones Ateliers', url: 'http://www.za-inee.org/'},
					{id: 'cnrs-letg', name: 'LETG - UMR6554 - Littoral - Environnement - Télédétection - Géomatique', url : 'https://letg.cnrs.fr/'}
				];
			});

		} ]);
