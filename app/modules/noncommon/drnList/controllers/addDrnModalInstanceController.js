(function(){
  'use strict';

  angular.module('payerPortalApp')
     .controller('addDrnModalInstanceController', ['$scope', '$log', '$location', '$routeParams', '$modalInstance', '$q', 'ServerDataModel', 'PayerDrnResource',
      function($scope, $log, $location, $routeParams, $modalInstance, $q, ServerDataModel, PayerDrnResource) {
	$log.info('Inside addDrnModalInstanceController.');
	
	var modalDialog = {};
	$scope.drn="1234";
	$scope.biller='';
	$scope.drns = ['1234', '897654', '2323456', '1212121212', '009765432'];
	$scope.getDrn = function(){
            //sleepUntil(Date.now() + 5000);
	    var data = ['1234', '897654', '2323456', '1212121212', '009765432'];
            return data;	    
	};

	var getData = function() {
	  var deferred = $q.defer();
	  
	  setTimeout(function () {
	     var data = ['1234', '897654', '2323456', '1212121212', '009765432'];
	     deferred.reject('failed message here');
	  }, 3000);
	  return deferred.promise;
	}
        
	var sleepUntil = function(timestamp) {
	   while(new Date() < timestamp){};
	   return true;
	}
	
        $scope.modalDialog = modalDialog;
	
	modalDialog.ok = function(){
	  $log.info('Closing with success');
	  $log.info($scope.modalDialog);
	  $scope.biller='something';
	  $modalInstance.close($scope.drn);
	};
	
	modalDialog.cancel = function() {
	  $log.info('Canceling add drn modal');
	  $modalInstance.dismiss('cancel');
	};

	modalDialog.clear = function() {
	  $log.info('Clearing the text field.');
	  $scope.drn = '';
	}
      }]);
})();
