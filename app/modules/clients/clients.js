/**
 * Clients module
 * 
 */

//ClientsCtrl (controller)
angular.module('clients').controller('ClientsCtrl',
		[ '$scope', '$translate', '$timeout',
          function($scope, $translate, $timeout) {

			//clients
			$scope.clients = [];
			$timeout(function(){
				$scope.clients =[
					{id: 'fao', name: 'UN-FAO', url: 'http://www.fao.org'},
					{id: 'ifremer', name: 'Ifremer', url: 'http://wwz.ifremer.fr/'},
					{id: 'umanis', name: 'Umanis', url: 'http://www.umanis.com'}
				];
			});

		} ]);
