var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.myarr = [1, 2, 3, 4, 5]

    // $scope.users = [{ name: "Mike", age: 23 }, { name: "Andy", age: 35 }, { name: "Reed", age: 16 }, { name: "Reed", age: 16 }]

    $scope.ob = { name: "Mike", age: 25, title: "Mr." }
})