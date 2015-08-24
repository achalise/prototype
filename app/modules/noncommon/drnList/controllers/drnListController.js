(function(){
  'use strict';

  angular.module('payerPortalApp')
     .controller('drnListController', ['$scope', '$log', '$location', '$routeParams', 'ServerDataModel', 'PayerDrnResource',
                               function($scope, $log, $location, $routeParams, ServerDataModel, PayerDrnResource) {

      $scope.payerId = $routeParams.id;
      PayerDrnResource.query({ payerId: $scope.payerId } ,function(data){
         $scope.payerDrnAssociations = ServerDataModel.payerDrnAssociations;
      });

      $scope.goToDRNDetails = goToDRNDetails;

      function goToDRNDetails(id) {
         $location.path('/drn/' + id);
      };
    }]);
}());
