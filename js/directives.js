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
            scope: {path:'&'},
            replace: false,
            templateUrl: 'templates/flash_object.html',
            link: function (scope, element, attrs) {
                function updateDom(value){
                    scope.src = value;
                }
                                
                scope.$watch(scope.path, function(value){
                   updateDom(value);                    
                });
            }
        };
    });
