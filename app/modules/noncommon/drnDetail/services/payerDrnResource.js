(function(){
   'use strict';

   angular.module('payerPortalApp').factory('PayerDrnResource',['$resource', function($resource){
      return $resource('/payer/:payerId/drn');
   }]);
})();
