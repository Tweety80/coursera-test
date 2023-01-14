(function functionName() {
'use strict'; //wymusza koniecznośc deklarowania (typowania) zmiennych

angular.module('MyFirstApp', [])

.controller('MyFirstController', function( $scope ) {
  $scope.firstname="Paweł";
  $scope.familyname="Nowak";
  $scope.sayHello = function () {
    return "lalala";
  }

});

})();
