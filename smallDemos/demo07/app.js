var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.greenVar = "green"
    $scope.normalVar = "normal"
    $scope.lightVar = "light"
    $scope.thickVar = "thick"
    $scope.thickerVar = "thicker"
    // toggle class
    $scope.enableGreen = true
    $scope.disableGreen = false
    $scope.enableThick = true
    $scope.disableThick = false
})