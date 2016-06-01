(function () {
    'use strict';
    angular.module('edu.ucar.scied.controllers.prediction', [])
        .controller('homeCtrl', homeCtrl)
        .controller('videosCtrl', videosCtrl)
        .controller('playerCtrl', playerCtrl)
        .controller('localFlashCtrl', localFlashCtrl);

    function homeCtrl(WebApp) {
        WebApp.setShowFooter(false);
        WebApp.setBodyLayout('home');
        WebApp.setMenuList('home');
        WebApp.setCols(3);
        WebApp.setDataSource('data/menu_main.json');
    }

    function videosCtrl(ContentData, Footer, WebApp) {
        WebApp.setShowFooter(true);
        WebApp.setBodyLayout('videos');
        WebApp.setMenuList('videos');
        WebApp.setCols(2);
        WebApp.setHeaderClass("larger");
        WebApp.setDataSource('data/menu_main.json');
        Footer.setPageTitle("Videos");
    }

    function playerCtrl(Footer, WebApp) {
        WebApp.setShowFooter(true);
        WebApp.setBodyLayout('video-player');
        Footer.setBackButton(true);
        Footer.setBackButtonText("Videos");
        Footer.setBackPage("#/videos");
    }

    function localFlashCtrl($routeParams, $scope, ContentData, Footer, WebApp) {
        WebApp.setShowFooter(true);
        WebApp.setBodyLayout('flash');
        var src = '';
        if ($routeParams.menuId) {
            Footer.setBackButton(true);
            Footer.setBackButtonText("Back");
            Footer.setBackPage('#/' + $routeParams.menuId);
        } else {
            Footer.setBackButton(false);
        }
        WebApp.setDataSource('data/flash.json');
        switch ($routeParams.contentId) {
        case "hurricane":
            src = '/core/assets/flash/forecast-hurricane.swf';
            break;
        case "snow":
            src = '/core/assets/flash/snow.swf';
            break;
        }

        $scope.flash = {
            visible: true,
            config: {
                swfUrl: src,
                width: 1920,
                height: 990
            }
        };
        ContentData(WebApp.getDataSource())
            .success(processData);

        function processData(list) {
            var menu_data = list["flash"];
            $.each(menu_data, function (index, value) {
                if (value.id == $routeParams.contentId) {
                    Footer.setPageTitle(value.title);
                }
            });
        }
    };
})();