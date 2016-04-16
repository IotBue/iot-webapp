angular.module('Raspi.factories')
.factory('dateTimeService', function() {
  return{
    getCurrentDate: function(seconds, year) {
      var currentdate = seconds ? new Date(seconds) : new Date(); 
      var datetime =  ("0" + currentdate.getDate()).slice(-2) + "/"
        + ("0" + (currentdate.getMonth()+1)).slice(-2);
        if(year == 'year') 
          datetime += "/" + currentdate.getFullYear();  
        datetime +=" " + ("0" + (currentdate.getHours())).slice(-2) + ":"  
        + ("0" + (currentdate.getMinutes())).slice(-2);
        return datetime;
     },
    
    getBeginningOfDay: function() {
      var currentdate = new Date(); 
      var datetime =  currentdate.getDate() + "/"
      + ("0" + (currentdate.getMonth()+1)).slice(-2)  + "/" 
      + currentdate.getFullYear() + " 00:00";  
      return datetime;  
    },
    
    getTime: function(seconds, format) {
      var currentFormat;
      currentFormat = format ? format : 'H:mm:ss';
      return moment().startOf('day')
                     .seconds(seconds)
                     .format(currentFormat);
    }
  }
});