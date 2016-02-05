angular.module('edu.ucar.scied.prediction.services', []).
factory('contentData', function contentDataFactory($http) {
    return getUrl = function (url) {
        return $http.get(url);
    };
}).
factory('redirect', function redirectFactory() {
    var redirect = {};

    redirect.goToPage = function (page) {
        window.location.href = page;
    };
    redirect.returnHome = function () {
        redirect.goToPage("#/");
    };

    return redirect;

});