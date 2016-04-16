angular.module('Raspi.factories')
.factory('highCharts', ['dateTimeService', function(dateTimeService) {
  return{
    lineChart: function(id, data) {
      $('#'+id).highcharts({
          chart: {
              zoomType: 'x'
          },
          credits: {
              enabled: false
          },
          title: {
              text: null
          },
          subtitle: {
              text: document.ontouchstart === undefined ?
                  'Clickeá y arrastrá en el gráfico para aumentar el zoom' :
                  'Pinch the chart to zoom in'
          },

          tooltip: {
            formatter: function() {
                format = '<b>Valor: ' + this.y + ' ºC</b><br>';
                format += dateTimeService.getCurrentDate(this.x * 1000, "year");
                return format;
            }
          },
          xAxis: {
              labels: {
                formatter: function() {
                    return dateTimeService.getCurrentDate(this.value * 1000);
                }
              },
              title: {
                  text: 'Fecha'
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Temperatura (ºC)'
              },
              labels: {
                  formatter: function () {
                    return this.value;
                  }
              }
          },
          plotOptions: {
              line: {
                dataLabels: {
                  enabled: true
                }
              },
              area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                  hover: {
                      lineWidth: 1
                  }
                }
              }
          },

          series: data,

          lang: {
            noData: "No hay datos disponibles."
          },
          loading: {
              style: {
                  fontWeight: 'bold',
                  fontSize: '25px',
                  color: '#303030'
              }
          }

      });
      return $('#'+id).highcharts();
    }
  }
}]);
