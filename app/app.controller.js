(function (){
	'use strict';
angular
	.module('app', [])
	.controller('AppController', ['$scope', 'dataservice', AppController]);

	//AppController.$inject = ['$dataservice'];



function AppController($scope, dataservice) {
  $scope.title = 'CRUD';

  $scope.init = function(){
    getUsers();
  };
  
  function getUsers() {
    return dataservice.getUsers()
    .then(function(data) {
      $scope.users = data;
      console.log($scope.users);
    });
  }
}
})();