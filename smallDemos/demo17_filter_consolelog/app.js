var app = angular.module('app', []);

app.controller('MainController', function ($scope, $filter) {
    $scope.cars = {
        arr: [{ brand: "Bentley", price: 120000 },
            { brand: "BMW", price: 80000 },
            { brand: "Benz", price: 78000 },
            { brand: "BYD", price: 16000 }]
    }
    console.log($filter('uppercase')('make this string uppercase!'))
});