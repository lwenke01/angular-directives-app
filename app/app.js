'use strict';
var angular = require('angular');

var app = angular.module('app', []);

app.directive('customnav', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/nav-bar.html',
    controller: function(){
      var vm = this;
      vm .active = 'Home'
    },
    controllerAs: 'navbarCtrl'
  };
});

app.directive('repos', function(){
  return {
    restrict: 'EA',
    templateUrl: 'templates/repos.html',
    controller: function($http) {
      var vm = this;
      vm.repos = [];
      vm.starred = [];
      $http.get('https://api.github.com/users/lwenke01/repos')
      .then((result)=>{
        vm.repos = result.data;
      }, function(error){
        console.log(error);
      });
      $http.get('https://api.github.com/users/lwenke01/starred')
      .then((result)=>{
        vm.starred = result.data;
      });
    },
    controllerAs: 'repoCtrl'
  };
});
