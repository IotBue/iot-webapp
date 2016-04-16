angular.module('Raspi.controllers',[]);
angular.module('Raspi.factories', []);

var app = angular
  .module('Raspi',['ngRoute', 'Raspi.controllers', 'Raspi.factories', 'ngStorage'])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $routeProvider.when('/raspis',{
      templateUrl: 'views/raspis.html',
      controller: 'RaspiController'
    }).when('/raspis/:raspi_id',{
      templateUrl: 'views/sensors.html',
      controller: 'SensorController'
    }).when('/raspis/:raspi_id/sensors/:sensor_id',{
      templateUrl: 'views/sensorData.html',
      controller: 'SensorDataController'
    }).otherwise({ redirectTo: '/raspis'});

  }

]);
