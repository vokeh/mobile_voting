angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('resultsCtrl', function($scope, $cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, $state) {
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }
  // Get a database reference to our posts
var ref = new Firebase("https://dazzling-heat-7556.firebaseio.com/votes");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
})

.controller('studentPresidentCtrl', function($scope) {

})

.controller('socialAffairsCtrl', function($scope) {

})

.controller('academicAffairsCtrl', function($scope) {

})

.controller('candidatesCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var votersRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/voters');
  $scope.voters = $firebaseArray(votersRef);
  $scope.inputRegno = function() {
    $scope.data = {};
    $scope.postTime = Date.now();
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.RegNo">',
      title: 'Enter RegNo in order to vote',
      subTitle: 'eg cs-m-0123-05-14',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.RegNo) {
            //don't allow the user to close unless he enters a RegNo
            e.preventDefault();
          } else {
            return $scope.data.RegNo;
          }
        }
      }]
    });

    myPopup.then(function(res) {
      votersRef.transaction(function(currentData) {
        if (currentData === null) {
          $state.go('castYourVote')
          return $scope.data;

        } else {
          alert('You have already voted.');
          $state.go('results')
          return; // Abort the transaction.
        }
      }, function(error, committed, snapshot) {
        if (error) {
          console.log('Transaction failed abnormally!', error);
        } else if (!committed) {
          console.log('We aborted the transaction (because you have already voted).');
        } else {
          console.log('Voter added!');
        }
        console.log("Voter's data: ", snapshot.val());
      });
    });

    $timeout(function() {
      myPopup.close(); //close the popup after 60 seconds
    }, 60000);
  };
})

.controller('socialcandCtrl', function($scope) {

})

.controller('acadCtrl', function($scope) {

})

.controller('castYourVoteCtrl', function($scope) {

})

.controller('maryCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/StudentPresident/MaryKamau');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for Mary?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('acadcand')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})

.controller('davidCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/StudentPresident/DavidMusoti');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for David?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('acadcand')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})

.controller('carolCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/SocialAffairs/CarolWanjiru');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for Carol?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('results')
        alert('Congratultions! Your votes have been successfully submited. You will now be able to view the results as they come in.')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})

.controller('mikeCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/SocialAffairs/MikeKinoti');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for Mike?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('results')
        alert('Congratultions! Your votes have been successfully submited. You will now be able to view the results as they come in.')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})

.controller('janeCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/AcademicAffairs/JaneChepkosgei');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for Jane?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('socialcand')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})

.controller('antonyCtrl', function($scope, $firebaseArray, $state, $ionicPopup, $timeout) {
  var maryRef = new Firebase('https://dazzling-heat-7556.firebaseio.com/votes/AcademicAffairs/AntonyOmondi');

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm vote',
      template: 'Are you sure you want to vote for Antony?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        maryRef.transaction(function(currentVote) {
          return currentVote + 1;
        })
        $state.go('socialcand')
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
})
