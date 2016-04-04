angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory("Votes", function($firebaseArray) {
  var votesRef = new Firebase("https://dazzling-heat-7556.firebaseio.com/votes");
  return $firebaseArray(votesRef);
})

.service('BlankService', [function(){

}]);
