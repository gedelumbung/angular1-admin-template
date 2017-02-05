'use strict';
angular.module('ngAdmin')
	.directive('headerNotification',function(){
		return {
        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


