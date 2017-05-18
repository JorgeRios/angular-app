(function() {
angular
    .module('app')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
  var service = {
    getUsers: getUsers
  }

  function getUsers() {
    return $http.get('app/users.data.json')
    .then(getComplete)
    .catch(getFailed);

    function getComplete(response) {
      return response.data.users;
    }

    function getFailed(error) {
      //logger.error('XHR Failed for getAvengers.' + error.data);
    }
  }
  return service;
}
})();