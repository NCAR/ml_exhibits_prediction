angular.module('edu.ucar.scied.prediction.directives', [])
    .directive("mlExhibitsFooterMenu", function () {
        return {
            restrict: 'E',
            scope: {
                data: "="
            },
            templateUrl: 'templates/footer.html',
            scope: true,
            transclude: false,
            controller: 'footerCtrl',
            link: function (scope, element, attrs) {
                
            }
        };
    });
