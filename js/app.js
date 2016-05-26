(function () {
    'use strict';
    angular.module("edu.ucar.scied.prediction", [
    "edu.ucar.scied.controllers",
    "edu.ucar.scied.controllers.videos",
    "edu.ucar.scied.controllers.prediction",
    "edu.ucar.scied.services",
    "edu.ucar.scied.services.footer",
    "edu.ucar.scied.directives.footer",
    "edu.ucar.scied.filters",
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
            templateUrl: "/core/templates/menu_grid.html",
            controller: "homeCtrl",
        }).
        when("/flash/:contentId", {
            templateUrl: "/core/templates/flash.html",
            controller: "localFlashCtrl"
        }).
        when("/videos", {
            templateUrl: "/core/templates/menu_grid.html",
            controller: "videosCtrl",
        }).
        when("/videos/:videoId", {
            templateUrl: "/core/templates/video_player.html",
            controller: "playerCtrl"
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
})();