var app = angular.module('gpApp',['ngRoute']);
	app
		
		.config(function($routeProvider) {
			$routeProvider
			.when('/',{
				  template: '<a href="#/sum_of_{{numberFirst}}/_and_{{numberSecond}}"><h1>Click to start calculations!</h1></a>'
				  
			  })
			  
			  .when('/sum_of_:numberFirst/_and_:numberSecond',{
				  template: ' <h2>try it</h2><input type="text"  placeholder="enter a number" ng-model="numberFirst" required><span class="operation">' +
				  '+</span><input type="text"  placeholder="enter a number" ng-model="numberSecond" required><span class="operation">' +
				  '=</span><gp-sum></gp-sum>' +
				  '<p>Please choose the currency ' +
				  '<select ng-model="selectedItem" ng-options="velue as key for (key,velue) in name"></select></p><p>Select currency = {{sum*selectedItem}}</p>',
				  controller: 'myCtrl'
			  })
			  
			  .otherwise({ 
				template: '<h1>Not Found</h1>'
			  });
		})
		
	
		.directive('gpSum', function() {
			return {
				restrict: 'E',
				 
	
				link: function (scope, element, attrs) {
						
						scope.$watch('numberFirst', function() {
							result();	
						});
						scope.$watch('numberSecond', function() {
							result();
						});
						scope.$watch('sum', function() {
							result();
						});
						
						var result = function() { 			
							if(isNaN(scope.numberFirst) && (scope.numberFirst != null) || isNaN(scope.numberSecond) && (scope.numberSecond != null)) 
								{alert("Enter a number, please")
									}else if(scope.numberFirst == null || scope.numberSecond == null){
										return scope.sum = 0;
										  }else{
											scope.sum = parseFloat(scope.numberFirst) + parseFloat(scope.numberSecond);	
											return scope.sum;}					
					}},
				template: "<input type='text' placeholder='the result'   ng-model='sum' disabled ><span>&euro;</span>"
			 
			}})
	
	
		
		.controller('myCtrl', ['$scope', '$routeParams',
			function($scope, $routeParams) {
				
				$scope.numberFirst = $routeParams.numberFirst;
				$scope.numberSecond = $routeParams.numberSecond;	
			}])

		.controller('TodoCtrl', function($scope, $http) {
			$scope.numberFirst = 5;
			$scope.numberSecond = 7;
			
			$http({
					method: 'get',
					url: 'http://api.fixer.io/latest' 
					
				}).success(function(data) {
					$scope.name = data['rates'];
					$scope.selectedItem = $scope.name["CAD"];
					
					
				}).error(function (err) {
					console.log('Sorry, something went wrong. The source data is unavailable.')
				})
				
	

			});
