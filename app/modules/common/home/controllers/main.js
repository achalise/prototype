(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name payerPortalApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the payerPortalApp
   */
  angular.module('payerPortalApp')
    .controller('MainCtrl', ['$scope', '$log', '$location', function ($scope, $log, $location) {
       $scope.message = 'A test message';
       $scope.goToDRNList = goToDRNList;


       function goToDRNList() {
          $log.info('Taking to DRN List page.');
          $location.path('/drnList');
       }
    }]);
}());
