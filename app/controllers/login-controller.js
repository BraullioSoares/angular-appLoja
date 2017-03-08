(function () {

    var myApp = angular.module('myApp');

    var AdminController = function () {
        var mv = this;
        mv.user = {};
        mv.error = false;
        mv.doLogin = function () {

              alert(mv.user.email + mv.user.password);

        };
    };

    AdminController.$inject = [];

    myApp.controller('AdminController',AdminController);

}());
