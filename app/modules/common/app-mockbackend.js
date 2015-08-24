(function(){
   'use strict';

   angular.module('payerPortalApp').run(function($httpBackend, ServerDataModel){
       $httpBackend.whenGET(/\modules/).passThrough();

       $httpBackend.whenGET('/payer/1/drn').respond(function(method, url, data) {
          var drnList = ServerDataModel.payerDrnAssociations;
          return [200, drnList, {}];
       });
   });
})();
