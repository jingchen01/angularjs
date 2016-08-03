angular.module('app', []);

var MainController = function($scope) {
    $scope.val = "test123"
    $scope.func = function(){
        return "abc" + "def"
    }
}