'use strict';
var angular = require('angular');

var app = angular.module('app', []);

app.directive('customNav', function(){
  return {
    restrict: 'E',
    templateUrl: './templates/nav-bar.html'

  };
});

// app.directive('customRepo', function(){
//   return {
//     restrict: 'EA',
//     templateUrl: './templates/repo.html',
//     controller: function($http) {
//       var vm = this;
//       vm.repos = [];
//       vm.starred = [];
//       $http.get('https://api.github.com/users/lwenke01/repos')
//       .then((result)=>{
//         console.log(result.data);
//         vm.repos = result.data;
//
//       }, function(error){
//         console.log(error);
//       });
//       $http.get('https://api.github.com/users/lwenke01/starred')
//       .then((result)=>{
//         vm.starred = result.data;
//       });
//     },
//     controllerAs: 'repoCtrl'
//   };
// });
