(function () {
   var myAppp = angular.module('myApp');

   myAppp.config(function ($stateProvider, $urlRouterProvider) {
       var login = {
           name: 'login',
           url: '/login',
           templateUrl: 'templates/login.html',
           controller: 'AdminController as mv'
       };
       $stateProvider.state(login);
       $urlRouterProvider.otherwise('/login');

   });

}());
