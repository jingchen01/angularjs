var app = angular.module('app', ['controllers']);

angular.module('controllers', []).controller('MainController', function ($scope) {
    $scope.val = "test256"
})