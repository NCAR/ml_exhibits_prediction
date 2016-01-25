angular.module('edu.ucar.scied.prediction.controllers', []).
controller('webAppCtrl', function ($rootScope) {
    $rootScope.showFooter = false;
    $rootScope.returnToHome = function () {
        $rootScope.goToPage("#/");
    }
    $rootScope.goToPage = function (page) {
        window.location.href = page;
    }
}).
controller('homeCtrl', function ($rootScope, $scope, contentData) {
    $rootScope.showFooter = false;
    $rootScope.bodylayout = 'home';
    $rootScope.menulist = 'home';
}).
controller('flashCtrl', function ($rootScope, $scope, $sce, $timeout,$routeParams, contentData) {
    $rootScope.showFooter = true;
    $scope.backButton = false;
    $rootScope.bodylayout = 'flash';

    var flashId = $routeParams.flashId;

    contentData.getUrl('data/menu_main.json')
        .success(function (list) {
            $scope.menu_data = list["flash"];

            $.each($scope.menu_data, function (index, value) {
                if (value.id == flashId) {
                    $timeout(function () {
                        $scope.src = $sce.trustAsResourceUrl(value.sources);
                    }, 1000);
                    $scope.pageTitle = value.title;
                    return false;
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
controller('menuListCtrl', function ($rootScope, $scope, $route,contentData) {
    $scope.cols = $route.current.$$route.cols;
    
    contentData.getUrl('data/menu_main.json')
     .success(function (list) {
         var data = list[$rootScope.menulist];
         $scope.menu_data = Array();
         $scope.menu_data[0] = Array();

         var col_counter = 0;
         var row_counter = 0;
         $.each(data, function (index, value) {

             if (value.active == true) {
                 if (col_counter >= $scope.cols) {
                     col_counter = 0;
                     row_counter++;
                     $scope.menu_data[row_counter] = Array();

                 }
                 $scope.menu_data[row_counter].push(value);
                 col_counter++;
             }

         });
        $scope.row_height_style = "row_"+(row_counter+1);
     });
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
                    return false;
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