/**
 * References module
 * 
 */

//References service
angular.module('references')
       .service('References',
		['$q', '$http',
		 function($q, $http){
		
			service = {
                
				/**
				 * Get the list of references
				 * @returns
				 */
                 getReferences: function(){
                    var this_ = this;
					var deferred = $q.defer();
					
					$http.get('resources/references.ods',
							{
								headers: {
									'Cache-Control' : 'no-cache'
								},
                                responseType: 'arraybuffer',
							})
					.success (function(response){
						var data = this_.processWorkbook(response);
                        var result = this_.processReferences(data);
						deferred.resolve(result);
					})
					.error(function(error){
						deferred.reject();
					});
					
					return deferred.promise;
				},
                
                 /**
                 * Function to process workbook (ODS file)
                 * @param response
                 */
                processWorkbook : function(response) {
                    var out;
                    var arraybuffer = response;
                    var data = new Uint8Array(arraybuffer);
                    var arr = new Array();
                    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                    var bstr = arr.join("");
                    
                    var workbook = XLSX.read(bstr, {type:"binary"});
                    out = XLSX.utils.sheet_to_json(workbook.Sheets.References)
                    return out;
                },
                
                /**
                 * Function to post-process the list of references for display
                 * @param data
                 */
                processReferences : function(data) {
                    var currentYear = new Date().getFullYear();						
                    var result = new Array();
                    for(var i=0;i<data.length;i++){
                        var record = data[i];
                        
                        var eventStartDate = new Date();
                        var dateStartArray = record.dateStart.split("/").map(function(item){return parseInt(item)});
                        eventStartDate.setFullYear(dateStartArray[2]);
                        eventStartDate.setMonth(dateStartArray[1]-1);
                        eventStartDate.setDate(dateStartArray[0]);
                        record["dateStart"] = eventStartDate;
                        
                        var eventEndDate = new Date();
                        var dateEndArray = record.dateEnd.split("/").map(function(item){return parseInt(item)});
                        eventEndDate.setFullYear(dateEndArray[2]);
                        eventEndDate.setMonth(dateEndArray[1]-1);
                        eventEndDate.setDate(dateEndArray[0]);
                        record["dateEnd"] = eventEndDate;
                        record["year"]= dateStartArray[2];
                        
                        var keys = Object.keys(record);
                        for(var j=0;j<keys.length;j++){
                            if(typeof record[keys[j]] == "string") record[keys[j]] = record[keys[j]].decode();
                        }
                        
                        result.push(record);
                    }
                    return result;
                }
				
            }
            
            return service;
        }]);

//ReferencesCtrl (controller)
angular.module('references').controller('ReferencesCtrl',
		[ '$scope', '$translate', '$timeout', '$filter', 'References', 'ngTableParams',
          function($scope, $translate, $timeout, $filter, References, ngTableParams) {
			
			//references
            $scope.referencesTable = new ngTableParams({
                page: 1,
                count: 8
            }, {
                total: 0,
                getData: function($defer, params) {
                    
                    References.getReferences().then(function(result){
                        var data = result;
                        data.reverse();
                        data = params.filter() ? $filter('filter')(data, params.filter()) : data;
                        data = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
                        
                        params.total(data.length);
                        data = data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        $defer.resolve(data);
                    });
                }
            });
                    
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
