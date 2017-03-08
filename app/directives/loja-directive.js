(function () {
    var myApp = angular.module('myApp');

    var mySlide = function () {
        return {
            restrict: 'E',
            templateUrl:'templates/home.html',
            scope: {
                products: "="
            },

        };
    };

    myApp.directive('mySlide', mySlide);
}())