(function() {
  'use strict';
  angular.module('edu.ucar.scied.prediction.controller', [])
    .controller('homeCtrl', homeCtrl)
    .controller('videosCtrl', videosCtrl)
    .controller('playerCtrl', playerCtrl)
    .controller('localFlashCtrl', localFlashCtrl);

  homeCtrl.$inject = ['WebApp'];

  function homeCtrl(WebApp) {

    WebApp.setShowFooter(false);
    WebApp.setBodyLayout('home');
    WebApp.setMenuList('home');
    WebApp.setCols(3);
    WebApp.setDataSource('data/menu_main.json');

  }

  videosCtrl.$inject = ['ContentData', 'Footer', 'Redirect', 'WebApp'];

  function videosCtrl(ContentData, Footer, Redirect, WebApp) {

    WebApp.setShowFooter(true);
    WebApp.setBodyLayout('videos');
    WebApp.setMenuList('videos');
    Footer.setBackButton(false);
    WebApp.setCols(2);
    WebApp.setHeaderClass("larger");
    WebApp.setDataSource('data/menu_main.json');
    Footer.setPageTitle("Videos");



  }

  playerCtrl.$inject = ['Footer', 'WebApp'];

  function playerCtrl(Footer, WebApp) {
    WebApp.setShowFooter(true);
    WebApp.setBodyLayout('video-player');
    WebApp.setDataSource('data/videos.json');
    Footer.setBackButton(true);
    Footer.setBackButtonText("Videos");
    Footer.setBackPage("#!/videos");



  }

  localFlashCtrl.$inject = ['$routeParams', '$scope', 'ContentData', 'Footer', 'WebApp'];

  function localFlashCtrl($routeParams, $scope, ContentData, Footer, WebApp) {
    WebApp.setShowFooter(true);
    WebApp.setBodyLayout('flash');
    var src = '';
    if ($routeParams.menuId) {
      Footer.setBackButton(true);
      Footer.setBackButtonText("Back");
      Footer.setBackPage('#!/' + $routeParams.menuId);
    } else {
      Footer.setBackButton(false);
    }
    WebApp.setDataSource('data/flash.json');
    switch ($routeParams.contentId) {
      case "hurricane":
        src = '/assets/flash/forecast-hurricane.swf';
        break;
      case "snow":
        src = '/assets/flash/snow.swf';
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
      .then(processData);

    function processData(list) {
      var menu_data = list.data["flash"];
      $.each(menu_data, function(index, value) {
        if (value.id == $routeParams.contentId) {
          Footer.setPageTitle(value.title);
        }
      });
    }
  };
})();
