"use strict";

(function () {

    function traineeDal (dal) {

        this.getTrainees = function () {
            return dal.http.GET("rest/Trainee/json");
        };

        this.saveTrainee = function (TraineeToSave) {
            return dal.http.POST("rest/Trainee/json", TraineeToSave);
        };

        this.updateTrainee = function (TraineeToUpdate) {
            return dal.http.PUT("rest/Trainee/json/", TraineeToUpdate);
        };

        this.deleteTrainee = function (TraineeToDelete) {
            return dal.http.DELETE("/rest/Trainee/json/", TraineeToDelete);
        };
    }

    angular.module("traineeApp").service("traineeDal", ["dal", traineeDal]);
}());