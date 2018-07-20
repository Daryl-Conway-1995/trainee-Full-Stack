"use strict";

(function () {


    function traineeService (traineeDal) {

        this.getTrainees = function()
        {
            console.log("calling traineeService get trainees");
            return traineeDal.getTrainees();
        };

    }

    angular.module("traineeApp").service("traineeService", ['traineeDal', traineeService]);

}());