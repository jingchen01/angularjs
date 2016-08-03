var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.greenVar = "green"
    $scope.normalVar = "normal"
    $scope.lightVar = "light"
    $scope.thickVar = "thick"
    $scope.thickerVar = "thicker"
})