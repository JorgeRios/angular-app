(function () {
'use strict';
angular
	.module('app', [])
	.controller('UsersController', UsersController);
//UsersController.$inject = ['usersData', 'logger'];
//function UsersController(usersData, logger) {

function UsersController() {
  var vm = this;
  vm.users = "hola";
  /*activate();

  function activate() {
    return getUsers().then(function() {
      logger.info('Activated Avengers View');
    });
  }

  function getUsers() {
    return usersData.getUsers()
    .then(function(data) {
      vm.users = data;
      return vm.users;
    });
  }*/

};
})();