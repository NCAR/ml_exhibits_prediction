(function() {
  'use strict';
  angular.module('edu.ucar.scied.prediction.controller', [])
    .controller('voiceCtrl', voiceCtrl)
    .controller('homeCtrl', homeCtrl)
    .controller('videosCtrl', videosCtrl)
    .controller('playerCtrl', playerCtrl)
    .controller('localFlashCtrl', localFlashCtrl);

  voiceCtrl.$inject = ['AnnYangService', 'Redirect', '$location'];

  function voiceCtrl(AnnYangService, Redirect, $location) {
    var vm = this;

    vm.init = function() {
      // go home
      AnnYangService.addCommand('go home', function() {
        Redirect.goToPage('#/');
      });

      // menu pages or go home
      AnnYangService.addCommand('go to *value', function(value) {
        value = value.toLowerCase();
        // from homepage
        if ($location.path() == '/') {
          switch (value) {
            case 'videos':
              Redirect.goToPage('#/videos');
              break;
            case 'create a snowstorm':
              Redirect.goToPage('#/flash/snow');
              break;
            case 'forecast a hurricane':
              Redirect.goToPage('#/flash/hurricane');
              break;
            case 'instrumentation and measurements':
              Redirect.goToPage('#/videos/principles');
              break;
          }
        } else if ($location.path().indexOf('/videos') !== -1) {
          // from video menu page or player pages, go to video player page
          console.log('here');
          switch (value) {
            case 'videos':
              Redirect.goToPage('#/videos');
              break;
            case 'hurricane visualization':
              Redirect.goToPage('#/videos/katrina');
              break;
            case 'development of a f3 tornado':
              Redirect.goToPage('#/videos/tornado');
              break;
            case 'from measurements to modeling':
              Redirect.goToPage('#/videos/measurements');
              break;
            case 'instrumentation and measurements':
              Redirect.goToPage('#/videos/principles');
              break;
          }
        } else {

          switch (value) {
            case 'home':
              Redirect.goToPage('#/');
              break;
          }

        }
      });

      // menu pages or go home
      AnnYangService.addCommand('*value', function(value) {
        if ($location.path().indexOf('/videos') !== -1) {


          // play videos
          switch (value) {
            case 'play':
              $('button.play').click();
              break;
            case 'stop':
            case 'pause':
            case 'paws':
              $('button.pause').click();
              break;
          }

        }

      });

      AnnYangService.start();
    }


    vm.init();
  }

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
    Footer.setBackPage("#/videos");



  }

  localFlashCtrl.$inject = ['$routeParams', '$scope', 'ContentData', 'Footer', 'WebApp'];

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
      .success(processData);

    function processData(list) {
      var menu_data = list["flash"];
      $.each(menu_data, function(index, value) {
        if (value.id == $routeParams.contentId) {
          Footer.setPageTitle(value.title);
        }
      });
    }
  };
})();
