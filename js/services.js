angular.module('edu.ucar.scied.prediction.services', []).
factory('ContentData', function ContentDataFactory($http) {
    return getUrl = function (url) {
        return $http.get(url);
    };
}).
factory('Redirect', function RedirectFactory() {
    var Redirect = {};

    Redirect.goToPage = function (page) {
        window.location.href = page;
    };
    Redirect.returnHome = function () {
        Redirect.goToPage("#/");
    };

    return Redirect;

});