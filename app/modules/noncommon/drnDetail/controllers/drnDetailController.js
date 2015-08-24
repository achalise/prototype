(function(){
   'use strict';

   angular.module('payerPortalApp').controller('drnDetailController',['$scope', '$routeParams', 'ServerDataModel',
      function($scope, $routeParams, ServerDataModel) {
      var drnId = $routeParams.id;
      //$scope.drnDetail = ServerDataModel.getDrn(drnId);

      $scope.updateAlias = function(id, alias) {
          console.log('Saving alias ' + alias);
          ServerDataModel.updateAlias(id, alias);
      };

      $scope.drnAssociation = ServerDataModel.getDrnAssociation(drnId);


   }]);
}())
