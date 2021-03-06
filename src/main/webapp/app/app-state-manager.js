"use strict";

(function () {

    angular.module('traineeApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("trainee", {
             url: "/trainee",
             templateUrl: "app/feature/trainee/trainee.html"
        }).state("traineeDetails", {
             url: "/traineeDetails",
             params: {
                 obj: null
             },
             templateUrl: "app/feature/traineeDetails/traineeDetails.html"
        })
    });
}());