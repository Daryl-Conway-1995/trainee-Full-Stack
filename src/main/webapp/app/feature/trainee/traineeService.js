'use strict';
traineeApp.service('dataService', function() {
    var service = this;

    service.data = '';
    service.getData = function(){
        return service.data;
    }

    service.setData = function(trainee){
        service.data = trainee;
    }

});