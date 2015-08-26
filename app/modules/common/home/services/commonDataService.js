(function(){
   'use strict';

   angular.module('payerPortalApp').factory('commonDataService', ['$log', function($log){
      console.log($log);
      $log.info('Inside commonDataService');

      var drns = [{id: 1234, billerName: 'LJ Hooker', alias: 'rent'},
                  {id: 5678, billerName: 'StrataMaster', alias: 'strata-master'},
                  {id: 1000, billerName: 'SydneyCityCouncil', alias: 'council'}];

      var drnList = function() {
         return drns;
      }

      var getDrn = function(id) {
         console.log(id);
         id = Number(id);
         for(var i = 0; i < drns.length; i++) {
            if (drns[i].id === id) {
               return drns[i];
            }
         }
         console.log('could not find drn for id ' + id);
         return null;
      }

      var updateAlias = function(id, alias) {
         for(var i = 0; i < drns.length; i++) {
            if (drns[i].id === id) {
              drns[i].alias = alias;
              return;
            }
         }
      }

      return {
         drnList: drnList,
         updateAlias: updateAlias,
         getDrn: getDrn
      };
   }]);
}());
