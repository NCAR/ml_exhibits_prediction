angular.module('edu.ucar.scied.prediction.directives', [])
    .directive("mlExhibitsFooterMenu", function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html',
            scope: true,
            controller: 'footerCtrl',
            link: function (scope, element, attrs) {
                
            }
        };
    })
    .directive("mlExhibitsFlashObject", function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/flash_object.html',
        };
    });
