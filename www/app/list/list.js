(function(){

  var app = angular.module('listCtrl', []);

  app.controller('listCtrl', function($scope, $http, Restangular){
      $scope.rests = [];

      Restangular.all('rests.json').getList().then(function(result) {
        angular.forEach(result, function($this) {
          //console.log($this);
          $scope.rests.push($this);
        })
        console.log($scope.rests);
      });

      $scope.doRefresh = function() {

        $scope.rests = [];

        //console.log("refreshing");

        Restangular.all('rests.json').getList().then(function(result) {
          angular.forEach(result, function($this) {
            //console.log($this);
            $scope.rests.push($this);
          })
          console.log($scope.rests);
        }).finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         });
      };
    }
  );

})();
