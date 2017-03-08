(function () {

    var myApp = angular.module('myApp');

    var HTTPRequestService = function ($http) {
        this.doLogin = function (userObject) {
           var url = "http://rest.learncode.academy/api/ufcquixada/user";
           return $http.post('/login', userObject);
        };

        this.doUser = function (email) {
            var url = "http://rest.learncode.academy/api/ufcquixada/user?emails";
            return $http.get(url + email);
        };
    };

    HTTPRequestService.$inject = ('$http');
    myApp.service('HTTPRequestService', HTTPRequestService);
}());
