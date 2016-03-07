angular.module('edu.ucar.scied.controllers.prediction', []).
controller('homeCtrl', function ($rootScope, $scope) {
    $rootScope.showFooter = false;
    $rootScope.bodylayout = 'home';
    $rootScope.menulist = 'home';
    $scope.cols = 3;
    $scope.data = 'data/menu_main.json';
})
.controller('videosCtrl', function ($rootScope, $scope, ContentData) {
    $rootScope.showFooter = true;
    $rootScope.bodylayout = 'videos';
    $rootScope.menulist = 'videos';
    $scope.pageTitle = "Videos";
    $scope.header_class = "larger";
    $scope.data = 'data/menu_main.json';
})
.controller('playerCtrl', function($rootScope,$scope){
    $rootScope.showFooter = true;
    $rootScope.bodylayout = 'video-player';  
    $scope.backButton = true;
    $scope.backButtonText = "Videos";
    $scope.backPage = "#/videos";
}).
controller('localFlashCtrl', function ($rootScope, $routeParams, $scope,ContentData) {
   $rootScope.showFooter = true;
    $rootScope.bodylayout = 'flash';
    var src = '';
    if ($routeParams.menuId) {
        $scope.backButton = true;
        $scope.backButtonText = "Back";
        $scope.backPage = '#/' + $routeParams.menuId;
    } else {
        $scope.backButton = false;
    }
    $scope.data = 'data/flash.json';
    ContentData($scope.data)
        .success(function (list) {
            $scope.menu_data = list["flash"];
            $.each($scope.menu_data, function (index, value) {
                if (value.id == $routeParams.contentId) {                    
                    $scope.pageTitle = value.title;
                }});
    });
    
    switch($routeParams.contentId){
        case "hurricane":
            src = '/core/assets/flash/forecast-hurricane.swf';
            break;
        case "snow":
            src = '/core/assets/flash/snow.swf';
            break;
    }
    
    $scope.flash = {
        visible: true,
        config: {
            swfUrl: src,
            width: 1920,
            height: 990
        }
    };
});