(function(window, angular, undefined){
	'use strict';
	angular.module('app', [
      
	]);
	angular.module('app').controller('controller', controller);
	function controller($scope, $window){
		$scope.employees = [{"id":"1","employee_ref":"466587722","employee_tipo":"Tumor primario","employee_loc":"Pulmón","employee_notas":""},{"id":"2","employee_name":"Garrett Winters","employee_salary":"434343","employee_age":"63"},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66"},{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22"},{"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33"}];
		console.log($scope.employees);
	}
 
 
})(window, window.angular);