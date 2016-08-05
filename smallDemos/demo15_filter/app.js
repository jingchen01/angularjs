var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.persons = { arr: [{ name: "jane", age: 23 }, { name: "smith", age: 31 }] }
    $scope.cars = { arr: ["Tesla", "Benz", "BMW", "Bentley", "Toyota"] }
});