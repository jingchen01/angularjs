var app = angular.module('app', []);

app.controller('MainController', function ($scope, $filter) {
    $scope.persons = {
        arr: [
            { name: "Smith", age: 23 },
            { name: "Tom", age: 15 },
            { name: "Bill", age: 28 },
            { name: "James", age: 33 },
            { name: "Brian", age: 93 },
            { name: "Kate", age: 41 }]
    }
})

app.filter('charlimit', function () {
    return function (input, length) {
        if (!length) {
            // default limit length is 10
            length = 10
        }
        if (!input) {
            return ''
        }
        if (input.length <= length) {
            return input
        }
        else {
            return input.substring(0, length) + '...'
        }
    }
})

app.filter('candrink', function () {
    return function (data, minage) {
        var filtered = [];
        if (!minage) {
            // default min age is 21
            minage = 21
        }
        for (var i = 0; i < data.length; i++) {
            var value = data[i];
            if (value.age >= minage) {
                filtered.push(value);
            }
        }
        return filtered;
    }
})