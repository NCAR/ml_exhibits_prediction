angular.module('edu.ucar.scied.prediction.directives', [])
    .directive("mlExhibitsFooterMenu", function (redirect) {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html',
            scope: {
                title: "=",
                backButtonText: "=",
                backButton: "=",
                backPage: "="
            }, 
            controller: function($scope, $rootScope){
                $scope.returnToHome = function () {
                    redirect.returnHome();
                }
                $scope.goBack = function(){
                    redirect.goToPage($scope.backPage);
                }
            }
        };
    })
    .directive("mlExhibitsFlashObject", function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/flash_object.html',
        };
    });
