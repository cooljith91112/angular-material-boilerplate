'use strict';

var myApp = angular.module('myApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
          .otherwise('/home');

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
          })
      }
    ]);
