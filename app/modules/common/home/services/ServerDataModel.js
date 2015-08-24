(function(){
   'use strict';

   angular.module('payerPortalApp').service('ServerDataModel', function(){
      this.payerDrnAssociations = [
         {
           payerDrn : {
             payerId: 1,
             drnId: 111,
             drn:"12345",
             startDate: "3/3/2014",
             endDate: "12/12/2017",
             nickName: "Rent",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "LJ Hooker",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 112,
             drn:"54321",
             startDate: "1/1/2014",
             endDate: "1/1/2016",
             nickName: "Council Rates",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "Sydney City Council",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 113,
             drn:"678910",
             startDate: "1/1/2015",
             endDate: "1/1/2017",
             nickName: "Strata",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "Strata Master",
             status: "",
             accessible: false
           }
         }
      ];

      this.updateAlias = function(id, nickName) {
         for(var i = 0; i < this.payerDrnAssociations.length; i++) {
            if(this.payerDrnAssociations[i].payerDrn.drnId === id){
               this.payerDrnAssociations[i].nickName = nickName;
            }
         }
      }

      this.getDrnAssociation = function(id) {
         id = Number(id);
         for(var i = 0; i < this.payerDrnAssociations.length; i++) {
            if(this.payerDrnAssociations[i].payerDrn.drnId === id){
               return this.payerDrnAssociations[i];
            }
         }
         console.warn('could not find association for drnId : ' + id);
      }


   });


})();
