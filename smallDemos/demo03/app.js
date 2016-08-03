var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.val = 1

    $scope.inc = function () {
        $scope.val += 1
    }

    $scope.isEven = function () {
        //    return ($scope.val % 2) == 0
        return ($scope.val & 1) == 0
    }
})