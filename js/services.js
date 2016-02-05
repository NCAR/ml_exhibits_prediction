angular.module('edu.ucar.scied.prediction.services', []).
factory('contentData', ['$http',function($http) {
        var contentData = {};
        
         contentData.getUrl = function(url){
             return $http.get(url);
         };

        return contentData;
}]).
factory('redirect', [function(){
   var redirect = {};
    
    redirect.goToPage = function(page){
       window.location.href = page;
    };
    redirect.returnHome = function(){
       redirect.goToPage("#/");
    };
    
    return redirect;
    
}]);