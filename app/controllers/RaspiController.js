app.controller('RaspiController', function($rootScope, $scope, $http, $location, $localStorage) {
  $scope.raspis = new Array();
  (function(){
    $http({
    method: 'GET',
    url: 'http://raspi-api.herokuapp.com/api/raspis',
    headers: {
      'Content-type': 'application/json'
    }
    }).success(function(response) {
      $scope.raspis = response;
    });
  })();

  $scope.goTo = function(id) {
    $localStorage.raspiId = id;
    $location.path('/raspis/' + id);
  };

});
