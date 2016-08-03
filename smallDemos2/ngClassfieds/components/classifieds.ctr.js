(function () {
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function ($scope) {
            $scope.classifieds = [{
                title: "First Item",
                price: "$1,000,000",
                description: "IntelliJ IDEA is a Java integrated development environment (IDE) for developing computer software. It is developed by JetBrains (formerly known as IntelliJ), and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development."
            }




            ]
        });
})();