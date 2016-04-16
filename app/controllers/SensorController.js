app.controller('SensorController', function($rootScope, $scope, $http, $location, $localStorage) {  
  (function(){
    $http({
    method: 'GET',
    url: 'http://raspi-api.herokuapp.com/api/raspis/' + $localStorage.raspiId + '/sensors',
    headers: {
      'Content-type': 'application/json'
    }
    }).success(function(response) {
      $scope.sensors = response.sensors;
    });
  })();
  
  $scope.goTo = function(id) {
    $localStorage.sensorId = id;
    $location.path('/raspis/' + $localStorage.raspiId + '/sensors/' + id );
  };

});
