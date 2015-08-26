(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name payerPortalApp
   * @description
   * # payerPortalApp
   *
   * Main module of the application.
   */
  angular
    .module('payerPortalApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap',
      'ngMockE2E'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/v1/payer/:id/drn', {
          templateUrl: 'modules/noncommon/drnList/partials/drnList.html',
          controller: 'drnListController'
        })
        .when('/drn/:id', {
          templateUrl: 'modules/noncommon/drnDetail/partials/drnDetail.html',
          controller: 'drnDetailController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());

