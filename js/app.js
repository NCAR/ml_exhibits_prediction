angular.module("edu.ucar.scied.prediction", ["edu.ucar.scied.prediction.controllers", 
                           "edu.ucar.scied.prediction.services",
                           "edu.ucar.scied.prediction.directives",
                           "edu.ucar.scied.prediction.filters",
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
            templateUrl: "templates/homepage.html", 
            controller: "homeCtrl"
        }
    ).
   when("/flash/:flashId", 
         {
            templateUrl: "templates/flash.html", 
            controller: "flashCtrl"
        }
    ).
   when("/videos", 
         {
            templateUrl: "templates/homepage.html", 
            controller: "videosCtrl"
        }
    ).
    when("/videos/:videoId", 
         {
            templateUrl: "templates/video_player.html", 
            controller: "videoPlayerCtrl"
        }
    ).
	otherwise({redirectTo: '/'});
}]);