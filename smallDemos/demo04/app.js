var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.myarr = [1, 2, 3, 4, 5]

    $scope.users = [{ name: "Mike", age: 23 }, { name: "Andy", age: 35 }, { name: "Reed", age: 16 }]
})