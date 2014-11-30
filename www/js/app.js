// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('sageHand', ['ionic', 'firebase', 'ui.router', 'ngStorage', 'sageHand.controllers'])

.run(function($ionicPlatform, $rootScope, $firebase, $window) { //, $firebaseAuth, $ior) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //debugger;
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

/*    $rootScope.userEmail = null;
    $rootScope.baseUrl = 'https://stage-hand.firebaseio.com/';
    var authRef = new Firebase($rootScope.baseUrl);
    $rootScope.auth = $firebaseAuth(authRef);
    */

    $rootScope.show = function(txt) {
      $rootScope.loading = $ionicLoading.show({
        content: txt ? txt : 'Loading..',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 200,
        showDelay: 0
      });
    };

    $rootScope.hide = function() {
      $ionicLoading.hide();
    };

    $rootScope.notify = function(txt) {
      $rootScope.show(txt);
      $window.setTimeout(function() {
        $rootScope.hide();
      }, 1999);
    };

    /*
    $rootScope.checkSession = function() {
      var auth = new FirebaseSimpleLogin(authRef, function (error, user) {
        if (error) {
          // no action yet.. redirect to default route
          $rootScope.userEmail = null;
          $window.location.href = '#/login';
        } else if (user) {
          // user authenticated with Firebase
          $rootScope.userEmail = user.email;
          $window.location.href = ('#/festivals');
        } else {
          // user is logged out
          $rootScope.userEmail = null;
          $window.location.href = '#/login';
        }
      });
    }
    */
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('auth', {
      url: "/login",
      abstract: true,
      templateUrl: "templates/login.html"
    })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })

    .state('app.festivals', {
      url: "/festivals",
      views: {
        'menuContent': {
          templateUrl: "templates/festivals.html",
          controller: 'FestivalsCtrl'
        }
      },
      resolve: {
        testRef: function() {
          return "app.festivals state's testRef"
        }
      }
    })

    .state('app.festival', {
      url: "/festivals/:festivalId",
      views: {
        'menuContent': {
          templateUrl: "templates/festival.html",
          controller: 'FestivalCtrl'
        }
      },
      resolve: {
        actsRef: function (FirebaseService, $stateParams) {
          return FirebaseService.getActs($stateParams.festivalId);
        }
      }
    })

    .state('app.act', {
      url: "/festivals/:festivalId/acts/:actId/edit",
      views: {
        'menuContent' :{
          templateUrl: "templates/edit-act.html",
          controller: 'FestivalCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/festivals');
});

