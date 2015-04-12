/**
 * Created by webdev on 4/11/15.
 */
'use strict';
/**
 * Created by webdev on 4/3/15.
 */
angular.module('showcaseApp')
  .controller('CvCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/cv.json').
      success(function(data) {
        $scope.cv = data;

      }).
      error(function(data) {
        // log error
      });
  });
