"use strict";
angular.module("ngAdmin").directive("header", function() {
    return {
        templateUrl: "scripts/directives/header/header.html",
        restrict: "E",
        replace: true
    };
});
