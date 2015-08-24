(function(){
  'use strict';

  angular.module('payerPortalApp')
     .controller('drnListController', ['$scope', '$log', '$location', 'ServerDataModel', 'PayerDrnResource',
                               function($scope, $log, $location, ServerDataModel, PayerDrnResource) {


      PayerDrnResource.query({ payerId: 1 } ,function(data){
         $scope.payerDrnAssociations = ServerDataModel.payerDrnAssociations;
      });

      $scope.goToDRNDetails = goToDRNDetails;

      function goToDRNDetails(id) {
         $location.path('/drn/' + id);
      };
    }]);
}());
