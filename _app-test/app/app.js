'use strict';


(function(){
  var contact = { name: ' Lisa Wenke', phone: '206-383-1273', email: 'lwenke@gmail.com'};
  var gitRoute = 'https://api.github.com/users/lwenke01';
  var app = angular.module("myPortfolio", []);

app.directive('customContact', function(){
  return {
    restrict: 'E',
    templateUrl: 'portfolio-contact.html',
    controller:function(){
      this.userInfo = contact;

  },
  controllerAs: 'contactCtrl'
};
});


  app.directive('customNav', function(){
    return {
      restrict: 'E',
      templateUrl: 'portfolio-tabs.html'

    };
  });

  app.directive('customRepo', function(){
    return {
      restrict: 'EA',
      templateUrl: 'portfolio-repo.html',
      controller:function($http){
        $http.get(gitRoute + '/' + 'repos')
        .then((result)=>{
          this.repos = result.data;
        });

    },
    controllerAs: 'repoCtrl'
  };
  });

  app.directive('testDirective', function(){
    return {
      restrict: 'E',
      scope: {
        cat: '='
      },
      replace: true,
      template:'<p> X equals: {{cat}}</p>'
    };
  });


})();
