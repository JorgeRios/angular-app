angular
    .module('app')
    .factory('usersData', usersData);

usersData.$inject = ['$http', 'logger'];

function usersData($http, logger) {
    return {
        getUsers: getUsers
    };

    function getUsers() {
      return $http.get('./users.data.json')
      .then(getComplete)
      .catch(getFailed);

      function getComplete(response) {
        return response.data.results;
      }

      function getFailed(error) {
        logger.error('XHR Failed for getAvengers.' + error.data);
      }
    }
}