angular.module('sageHand', ['ionic', 'firebase', 'ui.router', 'ngStorage', 'sageHand.controllers'])

/*****************************************************************************\
| 
|  APPLICATION RUN BLOCK (app kickstarter)
|
\*****************************************************************************/

.run(function($ionicPlatform, $rootScope, $firebase, $window) { 
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

  });
})

/*****************************************************************************\
| 
|  APPLICATION CONFIGURATION
|
\*****************************************************************************/

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
        eventRef: function (FirebaseService) {
          console.log(".state 'app.festivals' resolve:eventRef calling FirebaseService.getEvent()")
          return FirebaseService.getEvent();
        }
      }
    })

    .state('app.festival', {
      url: "/:festivalId",
      views: {
        'menuContent': {
          templateUrl: "templates/festival.html",
          controller: 'FestivalCtrl'
        }
      },
      resolve: {
        actsRef: function (FirebaseService, $stateParams) {
          console.log(".state 'app.festival' resolve:actsRef calling FirebaseService.getActs(" + $stateParams.festivalId + ")")
          return FirebaseService.getActs($stateParams.festivalId);
        }
      }
    })

    .state('app.editAct', {
      url: "/:festivalId/:actId/edit",
      views: {
        'menuContent': {
          templateUrl: "templates/edit-act.html",
          controller: 'ActCtrl'
        }
      },
      resolve: {
        actsRef: function (FirebaseService, $stateParams) {
          console.log(".state 'app.editAct' resolve:actsRef calling FirebaseService.getActs(" + $stateParams.festivalId + ")")
          return FirebaseService.getActs($stateParams.festivalId);
        },
        actRef: function (FirebaseService, $stateParams) {
          console.log(".state 'app.editAct' resolve:actRef calling FirebaseService.getAct(" + $stateParams.festivalId + " , " + $stateParams.actId + ")")
          return FirebaseService.getAct($stateParams.festivalId, $stateParams.actId);
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/festivals');
});


