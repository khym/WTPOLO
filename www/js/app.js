// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services','ngCordova', 'ngMap','rzModule','ng-mfb'])

.run(function($ionicPlatform,$cordovaStatusbar,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    // console.log("ddddddd",window.StatusBar);
    if (window.StatusBar) {
      console.log("in if $cordovaStatusbar.StatusBar");
      // org.apache.cordova.statusbar required
      StatusBar.overlaysWebView(true);
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleHex('#FF0000');
      // StatusBar.styleHex('#FFF');

    } 


     $rootScope.GlobalShowTab = function() {
      $rootScope.G_uid =  window.localStorage['uid'];
      if($rootScope.G_uid!=0){
        // console.log("innn");

        return false;
      }
        // console.log("outt");
        return true;
    };


  });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
    })

    .state('profile', {
      cache: false,
      url: '/Profile?id',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl'
    })

    .state('create_dormitory', {
      cache: false,
      url: '/create_dormitory',

          templateUrl: 'templates/create_dormitory.html',
          controller: 'Create_dormitoryCtrl'
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })


  .state('tab.dash', {
    // cache: false,
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.manage', {
      url: '/manage',
      views: {
        'tab-manage': {
          templateUrl: 'templates/tab-manage.html',
          controller: 'ManageCtrl'
        }
      }
  })

  .state('tab.more', {
      url: '/more',
      views: {
        'tab-more': {
          templateUrl: 'templates/more.html',
          controller: 'AccountCtrl'
        }
      }
  })


  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    cache: false,
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.bookmark', {
      cache: false,
    url: '/bookmark',
    views: {
      'tab-bookmark': {
        templateUrl: 'templates/tab-bookmark.html',
        controller: 'BookmarkCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
