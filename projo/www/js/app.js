'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngAnimate','ngCordova','firebase',
'ngMessages', 'app.controllers', 'app.routes', 'app.services',
'app.directives'])
// Firebase App URL.
.constant('FURL', 'https://dazzling-heat-7556.firebaseio.com/')
.run(function($ionicPlatform, $ionicPopup, $firebaseArray, $timeout) {
  $ionicPlatform
  .ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

});
