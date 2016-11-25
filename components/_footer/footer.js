'use strict';

angular.module('myApp')

.controller('FooterCtrl', ['$scope', '$location', function($scope, $location) {
}])

.directive('footer', function() {
    return {
        restrict: 'AE',
        templateUrl: 'components/_footer/footer.html',
        controller: 'FooterCtrl'
    }
});

