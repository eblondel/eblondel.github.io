/**
 * R module
 * 
 */


angular.module('rpackages').controller('RCtrl',
		[ '$scope', '$location', function($scope, $location) {

			$scope.packages = [
			   				{
			   					name : "rsdmx",
			   					title : "Tools for Reading SDMX Data and Metadata",
			   					description : "rsdmx facilitates reading SDMX data and metadata documents in R. " +
			   								  "The package provides a rich set of oriented-object functions that " +
			   								  "allows to read common SDMX documents in R objects such as data.frame.",
			   					url : "https://github.com/opensdmx/rsdmx/wiki",
			   					cran : "http://cran.r-project.org/web/packages/rsdmx",
			   					oncran : true
			   				},
			   				{
			   					name : "cleangeo",
			   					title : "Utilities for geospatial data cleaning in R",
			   					description : "cleangeo aims to provide basic functionalities to facilitate cleaning " +
			   								  "of geospatial data, a fundamental pre-requisite for suitable geoprocessing. " +
			   								  "The package intends to help users to solve geometry issues within R.",
			   					url : "https://github.com/eblondel/cleangeo",
			   					cran : "",
			   					oncran : false
			   				} ];
			   			
			   			
			

			$scope.startNewRow = function(index, count) {
				return ((index) % count) === 0;
			};

			

		} ]);
