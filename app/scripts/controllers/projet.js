'use strict';
/**
 * Created by webdev on 4/3/15.
 */
angular.module('showcaseApp')
  .controller('ProjetCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/projet.json').
      success(function(data) {
        $scope.projets = data;

      }).
      error(function(data) {
        // log error
      });
  });

