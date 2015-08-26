(function(){
   'use strict';

   angular.module('payerPortalApp').service('ServerDataModel', function(){
      this.payerDrnAssociations = [
         {
           payerDrn : {
             payerId: 1,
             drnId: 111,
             drn:"40042412344",
             startDate: "07/04/2015",
             endDate: "12/12/2017",
             nickName: "My Strata bill",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "HS Bentleigh",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 112,
             drn:"40042412344",
             startDate: "07/04/2015",
             endDate: "1/1/2016",
             nickName: "My Water Bill",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "HS Bentleigh - PM RENT Martin Place A/C",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 112,
             drn:"40042412344",
             startDate: "07/04/2015",
             endDate: "1/1/2016",
             nickName: "Electricity",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "HS Bentleigh - PM RENT Martin Place A/C",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 112,
             drn:"40042412344",
             startDate: "07/04/2015",
             endDate: "1/1/2016",
             nickName: "Gas",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "HS Bentleigh - PM RENT Martin Place A/C",
             status: "",
             accessible: false
           }
         },
         {
           payerDrn : {
             payerId: 1,
             drnId: 112,
             drn:"40042412344",
             startDate: "07/04/2015",
             endDate: "1/1/2016",
             nickName: "Phone Bill",
             status: "PayerDrnStatus"
           },
           biller : {
             id: 0,
             type: "BillerType",
             name: "HS Bentleigh - PM RENT Martin Place A/C",
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
