angular.module('edu.ucar.scied.prediction.filters', ['ngSanitize']).
filter('unsafe', ['$sce',function($sce) {
  return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);