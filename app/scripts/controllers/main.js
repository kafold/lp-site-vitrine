'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.custom1 = true;
    $scope.custom2 = false;
    $scope.toggleCustom = function() {
      $scope.custom1 = $scope.custom1 === false ? true: false;
      $scope.custom2 = $scope.custom2 === false ? true: false;
    };
  });
