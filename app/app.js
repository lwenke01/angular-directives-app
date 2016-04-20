'use strict';


(function(){
  var contact = { name: ' Lisa Wenke', phone: '206-383-1273', email: 'lwenke@gmail.com'};
  var gitRoute = 'https://api.github.com/users/lwenke01';
  var app = angular.module("myPortfolio", []);

app.directive('customContact', function(){
  return {
    restrict: 'E',
    templateUrl: './templates/portfolio-contact.html',
    controller:function(){
      this.userInfo = contact;

  },
  controllerAs: 'contactCtrl'
};
});


  app.directive('customNav', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/portfolio-tabs.html',
      controller: function(){
        this.tab = 1;

        this.isSet = function(check){
          return this.tab === check;
        };
        this.setTab = function(active){
          this.tab = active;
        };
      },
      controllerAs: 'tabCtrl'

    };
  });

  app.directive('customProject', function(){
    return {
      restrict: 'EA',
      templateUrl: './templates/portfolio-projects.html',
      controller:function($http){
        $http.get(gitRoute + '/' + 'repos')
        .then((result)=>{
          this.repos = result.data;
        });

    },
    controllerAs: 'projectCtrl'
  };
  });
app.directive('customHome', function(){
  return {
    restrict: 'EA',
    templateUrl: './templates/portfolio-home.html',
    controller:function($http){
      $http.get(gitRoute)
      .then((result)=>{
        this.user = result.data;
      });
    },
    controllerAs:'homeCtrl'
  };
});


})();
