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

.controller('FestivalsCtrl', function($scope ) {//, testRef, $rootScope, $firebaseAuth, $window) {

    //console.log(testRef);


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

.controller('FestivalCtrl', function($scope, $rootScope, $stateParams, $ionicModal){ // , actsRef, $localStorage, $firebaseAuth, $window) {
  $scope.title = "WRRMF14";

  //$scope.$storage = $localStorage;actsRef.$asArray()

  //$scope.acts = actsRef.$asArray();

  $scope.acts = [
    {
      "id": 1,
      "size": "duo",
      "performer": "Erin & The Project",
      "act": "",
      "needs": "Keyboard, Electric Drums, 2 vox, 2 monitors",
      "plot": "false",
      "callTime": [false, "11:15am"],
      "setUp": [false, "11:30am", "11:45am"],
      "set": [false, "12:10pm", "13:00pm"]
    },
    {
      "id": 2,
      "size": "octet",
      "performer": "Dear Liza",
      "act": "",
      "needs": "+1 8 vox, bass, drums, 2 ac guitar(DI), 1 electric guitar(own amp & mic), keyboard, percussionist, guest harmonica, monitors",
      "plot": "true",
      "callTime": [false, ""],
      "setUp": [false, "1:00pm", "1:25pm"],
      "set": [false, "1:25pm", "2:15pm"]
    },
    {
      "id": 3,
      "size": "quintet",
      "performer": "Alicia Faith",
      "act": "",
      "needs": "2 vox, keyboard, 2 guitars (ampad), bass, drums",
      "plot": "true",
      "callTime": [false, ""],
      "setUp": [false, "2:15pm", "2:40pm"],
      "set": [false, "2:40pm", "3:30pm"]
    },
    {
      "id": 4,
      "size": "duo",
      "performer": "Eliza Gilkyson",
      "act": "",
      "needs": "2 vox (will bring 1, needs phantom), guitar w/ pedal board, stomp box(DI), ampad suitor, mandolin (DI), 2 armless chairs, stool 3 monitors",
      "plot": "true",
      "callTime": [false, ""],
      "setUp": [false, "3:30pm", "3:50pm"],
      "set": [false, "3:50pm", "4:40pm"]
    },
    {
      "id": 5,
      "size": "",
      "performer": "MCs",
      "act": "Raffle",
      "plot": "false",
      "needs": "",
      "callTime": [false, ""],
      "setUp": [false, "", ""],
      "set": [false, "4:40pm", "5:15pm"]
    },
    {
      "id": 6,
      "size": "sextet",
      "performer": "Xperience Freedom",
      "act": "",
      "needs": "4 vox, sax, drums, guitar(DI), keyboard",
      "plot": "false",
      "callTime": [false, "4:40pm"],
      "setUp": [false, "5:15pm", "5:25pm"],
      "set": [false, "5:25pm", "6:15pm"]
    },
    {
      "id": 7,
      "size": "duo",
      "performer": "God Des & She",
      "act": "",
      "needs": "2 vox, 2 monitors, guitar, ipod",
      "plot": "false",
      "callTime": [false, "5:40pm"],
      "setUp": [false, "6:15pm", "6:25pm"],
      "set": [false, "6:25", "7:15pm"]
    },
    {
      "id": 8,
      "size": "",
      "performer": "MCs",
      "act": "Raffle",
      "needs": "",
      "plot": "false",
      "callTime": "",
      "setUp": [false, "", ""],
      "set": [false, "7:15", "7:25"]
    },
    {
      "id": 9,
      "size": "solo",
      "performer": "Toshi Reagon",
      "act": "",
      "needs": "vox, 2 DI, 2 guitar stands, armless chair, stool, 2 monitors",
      "plot": "true",
      "callTime": "6:35pm",
      "setUp": [false, "7:25pm", "7:30pm"],
      "set": [false, "7:30pm", "8:20pm"]
    },
    {
      "id": 10,
      "size": "",
      "performer": "MCs & Organizers",
      "act": "Raffle",
      "needs": "",
      "plot": "false",
      "callTime": [false, ""],
      "setUp": [false, "", ""],
      "set": [false, "8:20pm", "8:50pm"]
    },
    {
      "id": 11,
      "size": "duo",
      "performer": "Sarah Bettens",
      "act": "",
      "needs": "guitar (DI), keyboard, 2 vox, 4 monitors",
      "plot": "false",
      "callTime": [false, "8:00pm"],
      "setUp": [false, "8:50pm", "9:00pm"],
      "set": [false, "9:00pm", "10:30pm"]
    }
  ];





  // create and load the  edit act in modal format
  $ionicModal.fromTemplateUrl('edit-act.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.actModal = modal;
  });

  // save act edits
  $scope.modifyAct = function(act) {
    var actId = _.findIndex($scope.acts, {'id': act.id});
    //$scope.acts.splice();
    $scope.actModal.hide();
  };

  // show the edit act modal
  $scope.editAct = function() {
    $scope.actModal.show();
  };

  // close the edit act modal
  $scope.closeEditAct = function() {
    $scope.actModal.hide();
  };

  // take out the garbage
  $scope.$on('$destroy', function() {
    $scope.actModal.remove();
  });

})
