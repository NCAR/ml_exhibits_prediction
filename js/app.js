angular.module("edu.ucar.scied.prediction", [
    "edu.ucar.scied.controllers", 
    "edu.ucar.scied.controllers.flash",
    "edu.ucar.scied.controllers.videos",
    "edu.ucar.scied.services",
    "edu.ucar.scied.directives",
    "edu.ucar.scied.directives.flash",
    "edu.ucar.scied.filters",
    "ngRoute",  
    "ngMaterial",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    "angulartics", 
    "angulartics.google.analytics"
                          ]).
config(["$routeProvider", function($routeProvider) {
  $routeProvider.
	when("/", 
         {
            templateUrl: "/core/templates/menu_grid.html", 
            controller: "homeCtrl",
            cols: 3
        }
    ).
   when("/flash/:contentId", 
         {
            templateUrl: "/core/templates/flash.html", 
            controller: "flashCtrl"
        }
    ).
   when("/videos", 
         {
            templateUrl: "/core/templates/menu_grid.html", 
            controller: "videosCtrl",
            cols: 2
        }
    ).
    when("/videos/:videoId", 
         {
            templateUrl: "/core/templates/video_player.html", 
            controller: "videoPlayerCtrl"
        }
    ).
	otherwise({redirectTo: '/'});
}]);