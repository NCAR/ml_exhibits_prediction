angular.module('edu.ucar.scied.prediction.services', []).
factory('contentData', ['$http',function($http) {
        var contentData = {};
        
         contentData.getUrl = function(url){
             return $http.get(url);
         };

        return contentData;
}]);