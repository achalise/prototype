'use strict';

describe('Controller: DrnListController', function () {

  // load the controller's module
  beforeEach(module('payerPortalApp'));

  var drnListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    drnListController = $controller('drnListController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.payerDrnAssociations.length).toBe(4);
  });
});
