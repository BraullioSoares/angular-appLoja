(function () {
   var myApp = angular.module('myApp');

   var server = function ($http) {
       this.getUsers = function () {
           return $http.get('http://localhost:3000/users');
       };
   };

   HTTPResquestService.$inject = ('http');
}());