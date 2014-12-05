angular.module('sageHand.controllers', [])

/*****************************************************************************\
| 
|  APP controller
|
\*****************************************************************************/

.controller('AppCtrl', function($scope, $rootScope, $firebaseAuth, $window, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

/*****************************************************************************\
| 
|  FESTIVALS controller  (mostly just to list festivals)
|
\*****************************************************************************/

.controller('FestivalsCtrl', function($scope) {// , $rootScope, $firebaseAuth, $window) {

  $scope.festivals = [
    { title: 'WRRMF13', id: 1 },
    { title: 'WRRMF14', id: 'WRRMF14' },
    { title: 'UMF14', id: 2 },
    { title: 'DVMF14', id: 3 },
    { title: 'Moab14', id: 4 },
    { title: 'UFOMT14', id: 5 },
    { title: 'Groovefest14', id: 6 }
  ];

})

/*****************************************************************************\
| 
|  FESTIVAL controller  (lots of meaty stuff for a specific festival)
|
\*****************************************************************************/

.controller('FestivalCtrl', function($scope, $rootScope, $stateParams, $ionicModal, FirebaseService, actsRef){ //, actRef){

  $scope.title = "WRRMF14";

  $scope.acts = actsRef.$asArray();
  console.log($scope.acts);

/*
  $scope.acts.$bindTo($scope, "live").then(function() {
    console.log('$bindTo $scope.data...');
    console.log($scope.live); // { foo: "bar" }
//       $scope.live.foo = "baz";  // will be saved to Firebase
//       ref.$set({foo: "baz"});   // this would update Firebase and $scope.data
  });
  */

  // Time Booleans
  $scope.callTimeClick = function(actId, isChecked) {
    console.log(actId, isChecked);
    var toUpdate = actId + ": {callTime: {isDone: " + !isChecked + "}}";
    console.log(toUpdate);
    FirebaseService.updateActs($scope.title, toUpdate);
  }

  // Open the login modal
  $scope.editAct = function(act) {
    console.log("FestivalCtrl's editAct function");
    $scope.actCtrl.show();
  };

  // create and load the edit act in modal format
  $ionicModal.fromTemplateUrl('templates/edit-act.html', {
    scope: $scope.actsRef,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.actCtrl = modal;
  });

})


/*****************************************************************************\
| 
|  ACT controller (lots of meaty stuff for a specific festival act)
|
\*****************************************************************************/

.controller('ActCtrl', function($scope, $firebase, FirebaseService, $rootScope, $stateParams,  actRef){

      $scope.eventKey = actRef.eventKey;
      $scope.act = actRef.act.$asObject();
      console.log("$scope.act: ", $scope.act);

      $scope.act.$bindTo($scope, "live").then(function() {
        console.log('$bindTo $scope.data...');
        console.log($scope.live); // { foo: "bar" }
//       $scope.live.foo = "baz";  // will be saved to Firebase
//       ref.$set({foo: "baz"});   // this would update Firebase and $scope.data
      });

    // close the edit act modal
    $scope.closeEditAct = function() {
      $scope.modal.hide();
    };

    // take out the garbage
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.hideModal = function() {
      $scope.modal.hide();
    };
    $scope.removeModal = function() {
      $scope.modal.remove();
    };

})
