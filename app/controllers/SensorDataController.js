app.controller('SensorDataController', function($rootScope, $scope, $http, $location, $localStorage, highCharts) {  
  (function(){
    $http({
    method: 'GET',
    url: 'http://raspi-api.herokuapp.com/api/raspis/' + $localStorage.raspiId + '/sensors/' + $localStorage.sensorId,
   headers: {
      'Content-type': 'application/json'
    }
    }).success(function(response) {
      if (response.sensorData) {
        $scope.title = response.sensorType;
        var chartData = response.sensorData.map(function(data){
          return [moment(data.sentAt).unix(), data.value];
        });
        console.log(response);
        var data = [{name: response.sensorType, data: chartData}];
        highCharts.lineChart('chart', data);
      }      

    });
  })();
});
