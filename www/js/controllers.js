angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

.controller('FestivalsCtrl', function($scope) {
  $scope.festivals = [
    { title: 'WRRMF14', id: 1 },
    { title: 'UMF14', id: 2 },
    { title: 'DVMF14', id: 3 },
    { title: 'Moab14', id: 4 },
    { title: 'UFOMT14', id: 5 },
    { title: 'Groovefest14', id: 6 }
  ];
})

.controller('FestivalCtrl', function($scope, $stateParams) {
    $scope.acts = [
      {
        "size": "duo",
        "performer": "Erin & The Project",
        "act": "",
        "needs": "Keyboard, Electric Drums, 2 vox, 2 monitors",
        "plot": "false",
        "callTime": "11:15am",
        "setUp": ["11:30am", "11:45am"],
        "set": ["12:10pm", "13:00pm"]
      },
      {
        "size": "octet",
        "performer": "Dear Liza",
        "act": "",
        "needs": "+1 8 vox, bass, drums, 2 ac guitar(DI), 1 electric guitar(own amp & mic), keyboard, percussionist, guest harmonica, monitors",
        "plot": "true",
        "callTime": "",
        "setUp": ["1:00pm", "1:25pm"],
        "set": ["1:25pm", "2:15pm"]
      },
      {
        "size": "quintet",
        "performer": "Alicia Faith",
        "act": "",
        "needs": "2 vox, keyboard, 2 guitars (ampad), bass, drums",
        "plot": "true",
        "callTime": "",
        "setUp": ["2:15pm", "2:40pm"],
        "set": ["2:40pm", "3:30pm"]
      },
      {
        "size": "duo",
        "performer": "Eliza Gilkyson",
        "act": "",
        "needs": "2 vox (will bring 1, needs phantom), guitar w/ pedal board, stomp box(DI), ampad suitor, mandolin (DI), 2 armless chairs, stool 3 monitors",
        "plot": "true",
        "callTime": "",
        "setUp": ["3:30pm", "3:50pm"],
        "set": ["3:50pm", "4:40pm"]
      },
      {
        "size": "",
        "performer": "MCs",
        "act": "Raffle",
        "plot": "false",
        "needs": "",
        "callTime": "",
        "setUp": [""],
        "set": ["4:40pm", "5:15pm"]
      },
      {
        "size": "sextet",
        "performer": "Xperience Freedom",
        "act": "",
        "needs": "4 vox, sax, drums, guitar(DI), keyboard",
        "plot": "false",
        "callTime": "4:40pm",
        "setUp": ["5:15pm", "5:25pm"],
        "set": ["5:25pm", "6:15pm"]
      },
      {
        "size": "duo",
        "performer": "God Des & She",
        "act": "",
        "needs": "2 vox, 2 monitors, guitar, ipod",
        "plot": "false",
        "callTime": "5:40pm",
        "setUp": ["6:15pm", "6:25pm"],
        "set": ["6:25", "7:15pm"]
      },
      {
        "size": "",
        "performer": "MCs",
        "act": "Raffle",
        "needs": "",
        "plot": "false",
        "callTime": "",
        "setUp": [""],
        "set": ["7:15", "7:25"]
      },
      {
        "size": "solo",
        "performer": "Toshi Reagon",
        "act": "",
        "needs": "vox, 2 DI, 2 guitar stands, armless chair, stool, 2 monitors",
        "plot": "true",
        "callTime": "6:35pm",
        "setUp": ["7:25pm", "7:30pm"],
        "set": ["7:30pm", "8:20pm"]
      },
      {
        "size": "",
        "performer": "MCs & Organizers",
        "act": "Raffle",
        "needs": "",
        "plot": "false",
        "callTime": "",
        "setUp": [""],
        "set": ["8:20pm", "8:50pm"]
      },
      {
        "size": "duo",
        "performer": "Sarah Bettens",
        "act": "",
        "needs": "guitar (DI), keyboard, 2 vox, 4 monitors",
        "plot": "false",
        "callTime": "8:00pm",
        "setUp": ["8:50pm", "9:00pm"],
        "set": ["9:00pm", "10:30pm"]
      }
    ]
});
