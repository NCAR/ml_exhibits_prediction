angular.module('edu.ucar.scied.prediction.controllers', []).
controller('webAppCtrl', function ($rootScope) {
    $rootScope.showFooter = false;
    $rootScope.returnToHome = function () {
        $rootScope.goToPage("#/");
    }
    $rootScope.goToPage = function (page) {
        console.log(page);
        window.location.href = page;
    }
}).
controller('homeCtrl', function ($rootScope, $scope, contentData) {
    $rootScope.showFooter = false;
    $rootScope.bodylayout = 'home';
    $rootScope.menulist = 'home';
}).
controller('flashCtrl', function ($rootScope, $scope, $routeParams, contentData) {
    $rootScope.showFooter = true;
    $scope.backButton = false;
    $rootScope.bodylayout = 'flash';

    var flashId = $routeParams.flashId;

    contentData.getUrl('data/menu_main.json')
        .success(function (list) {
            $scope.menu_data = list["flash"];

            $.each($scope.menu_data, function (index, value) {
                if (value.id == flashId) {
                    $scope.src = value.sources;
                    $scope.pageTitle = value.title;
                }
            });
        });

}).
controller('videosCtrl', function ($rootScope, $scope, contentData) {
    $rootScope.showFooter = true;
    $rootScope.bodylayout = 'videos';
    $rootScope.menulist = 'videos';
    $scope.pageTitle = "Videos";
    $scope.header_class = "larger";
}).
controller('menuListCtrl', function ($rootScope, $scope, contentData) {
    contentData.getUrl('data/menu_main.json')
        .success(function (list) {
            $scope.menu_data = list[$rootScope.menulist];
            var total = 0;
            $.each($scope.menu_data, function (index, value) {
                if (value.active == true) {
                    total++;
                }
            });

            $scope.items = 12 / total;
        });

    $scope.show = function (item) {
        return (item.active === true);
    };

}).
controller('videoPlayerCtrl', function ($rootScope, $scope, $routeParams, contentData) {
    $rootScope.showFooter = true;
    $rootScope.bodylayout = 'video-player';
    $scope.videoId = $routeParams.videoId;

    contentData.getUrl('data/menu_main.json')
        .success(function (list) {
            $scope.menu_data = list["videos"];

            $.each($scope.menu_data, function (index, value) {
                if (value.id == $scope.videoId) {
                    $scope.pageTitle = value.title;
                }
            });
        });

    $scope.show = function (item) {
        return (item.active === true);
    };
    $scope.chosenVideo = function (item) {
        return (item.id === $scope.videoId);
    };

    $scope.backButton = true;
    $scope.backButtonText = "Videos";
    $scope.backPage = "#/videos";

}).
controller('footerCtrl', function ($scope) {

});