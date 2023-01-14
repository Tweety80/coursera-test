(function functionName() {
'use strict'; //wymusza koniecznośc deklarowania (typowania) zmiennych

angular.module('MyFirstApp', [])

.controller('MyFirstController', function( $scope ) {
  $scope.firstname="Johny";
  $scope.familyname="Bravo";
  $scope.sayHello = function () {
    return "Zwrotka z funkcji";
  }

});

})();
