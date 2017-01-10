app.factory('dataFactory', ['$http', function($http) {
  $http.defaults.headers.common.Accept = 'application/json, text/plain';
  var dataFactory = {};

  dataFactory.getAppConfig = function() {
    return $http.get('/app-config/config');
  };

  dataFactory.saveAppConfig = function(data) {
    return $http.post('/app-config/config', data);
  };

  dataFactory.runApp = function(data) {
    return $http.post('/app-config/run-app', data);
  };

  dataFactory.scheduler = function() {
    return $http.get('/app-config/scheduler');
  };

  dataFactory.initApps = function() {
    return $http.get('/app-config/init');
  };

  return dataFactory;
}]);