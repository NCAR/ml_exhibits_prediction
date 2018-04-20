(function () {
    'use strict';
    angular.module("edu.ucar.scied.prediction", [
    "edu.ucar.scied.prediction.controller",
    "edu.ucar.scied.webapp.controller",
    "edu.ucar.scied.webapp.service",
    "edu.ucar.scied.menulist.controller",
    "edu.ucar.scied.videos.controller",
    "edu.ucar.scied.footer.service",
    "edu.ucar.scied.footer.directive",
    "edu.ucar.scied.filters",
    "edu.ucar.scied.services",
    "ngRoute",
    "ngMaterial",
    "w11k.flash",
    "w11k.flash.template",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    "angulartics",
    "angulartics.google.analytics"
    ]).
    config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "/core/js/menulist/menu_grid.html",
            controller: "homeCtrl",
        }).
        when("/flash/:contentId", {
            templateUrl: "/core/js/flash/flash.html",
            controller: "localFlashCtrl"
        }).
        when("/videos", {
            templateUrl: "/core/js/menulist/menu_grid.html",
            controller: "videosCtrl",
        }).
        when("/videos/:videoId", {
            templateUrl: "/core/js/videos/video_player.html",
            controller: "playerCtrl"
        }).
        otherwise({
            redirectTo: '/'
        });
    }])
})();
