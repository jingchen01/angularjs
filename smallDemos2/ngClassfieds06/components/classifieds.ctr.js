(function () {
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function ($scope) {
            $scope.name = {
                first: "Ryan",
                last: "William"
            };

            $scope.message = "Hello, Angular JS!";
        });
})();