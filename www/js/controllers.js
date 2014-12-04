angular.module('sageHand.controllers', [])

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

.controller('FestivalCtrl', function($scope, $rootScope, $stateParams, $ionicModal, actsRef){ //, actRef){

  $scope.title = "WRRMF14";


  //  console.log(actsRef);
  $scope.acts = actsRef.$asArray();
  //  console.log($scope.acts);


    // Open the login modal
    $scope.editAct = function(act) {
      console.log("FestivalCtrl's editAct function");
      $scope.actCtrl.show();
    };

    // create and load the edit act in modal format
    $ionicModal.fromTemplateUrl('templates/edit-act.html', {
      scope: $scope.actsRef/*,
       animation: 'slide-in-up'*/
    }).then(function(modal) {
      $scope.actCtrl = modal;
    });

})


.controller('ActCtrl', function($scope, $firebase, FirebaseService, $rootScope, $stateParams,  actRef){

    $scope.title = "WRRMF14";

      $scope.act = actRef;
      console.log("$scope.act:", $scope.act);

    // save act edits
    $scope.modifyAct = function() {
      //var actId = _.findIndex($scope.acts, {'id': act.id});

/*      var updatedAct = {};
          updatedAct.id = $scope.act.$id;
          updatedAct.id.size = $scope.act.size;
          updatedAct.id.performer = $scope.act.performer;
          updatedAct.id.act = $scope.act.act;
          updatedAct.id.needs = $scope.act.needs;
          updatedAct.id.hasPlot = $scope.act.hasPlot;
          updatedAct.id.callTime.isDone = $scope.act.callTime.isDone;  // undefined
          updatedAct.id.callTime.start = $scope.act.callTime.start;
          updatedAct.id.setUp.isDone = $scope.act.setUp.isDone;
          updatedAct.id.setUp.start = $scope.act.setUp.start;
          updatedAct.id.setUp.end = $scope.act.setUp.end;
          updatedAct.id.set.isDone = $scope.act.set.isDone;
          updatedAct.id.set.start = $scope.act.set.start;
          updatedAct.id.set.end = $scope.act.set.end;

      console.log(updatedAct);*/

      //actRef.set(updatedAct);
      $scope.modal.hide();
    };


    // close the edit act modal
    $scope.closeEditAct = function() {
      $scope.modal.hide();
    };

/*    // take out the garbage
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });*/


    $scope.hideModal = function() {
      $scope.modal.hide();
    };
    $scope.removeModal = function() {
      $scope.modal.remove();
    };

})
