"use strict";

angular
    .module("ngAdmin")
    .controller("TutupBukuCtrl", function($scope, $position) {
        $scope.alerts = [];

        $scope.save = function() {
            $scope.alerts.push({
                msg: "Well done! You successfully read this important alert message."
            });
        };
    });
