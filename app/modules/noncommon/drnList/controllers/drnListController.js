(function(){
  'use strict';

  angular.module('payerPortalApp')
     .controller('drnListController', ['$scope', '$log', '$location', '$routeParams', '$modal', 'ServerDataModel', 'PayerDrnResource',
                               function($scope, $log, $location, $routeParams, $modal, ServerDataModel, PayerDrnResource) {

      $scope.payerId = $routeParams.id;
      PayerDrnResource.query({ payerId: $scope.payerId } ,function(data){
         $scope.payerDrnAssociations = ServerDataModel.payerDrnAssociations;
      });
      
      //For modal dialog
      $scope.animationsEnabled = true;
      $scope.open = function(size) {
         $log.info('Inside modal open');
	 
	 var modalInstance = $modal.open({
	    animation: $scope.animationsEnabled,
	    templateUrl: 'modules/noncommon/drnList/partials/addDrnModal.html',
	    controller: 'addDrnModalInstanceController',
	    size: size,
	    resolve: {
	       drn: function() {
	          return $scope.drn
	       }
	    }
	 });
	 
	 modalInstance.result.then(function(drn) {
	    $log.info('Added drn: ' + drn);
	 }, function(){
	    $log.info('Canceled');
	 });
      };

      $scope.goToDRNDetails = goToDRNDetails;

      function goToDRNDetails(id) {
         $location.path('/drn/' + id);
      };
    }]);
})();
