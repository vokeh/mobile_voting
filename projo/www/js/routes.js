angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })
    .state('results', {
    url: '/page_results',
    templateUrl: 'views/home/results.html',
    controller: 'resultsCtrl'
  })

  .state('mary', {
  url: '/mary',
  templateUrl: 'views/home/candidates/mary.html',
  controller: 'maryCtrl'
})

.state('mary_det', {
url: '/mary',
templateUrl: 'views/home/candidates/mary_det.html',
})

.state('david', {
url: '/david',
templateUrl: 'views/home/candidates/david.html',
controller: 'davidCtrl'
})

.state('david_det', {
url: '/david',
templateUrl: 'views/home/candidates/david_det.html',
})

.state('carol', {
url: '/carol',
templateUrl: 'views/home/candidates/carol.html',
controller: 'carolCtrl'
})

.state('carol_det', {
url: '/carol',
templateUrl: 'views/home/candidates/carol_det.html',
})

.state('mike', {
url: '/mike',
templateUrl: 'views/home/candidates/mike.html',
controller: 'mikeCtrl'
})

.state('mike_det', {
url: '/mike',
templateUrl: 'views/home/candidates/mike_det.html',
})

.state('jane', {
url: '/jane',
templateUrl: 'views/home/candidates/jane.html',
controller: 'janeCtrl'
})

.state('jane_det', {
url: '/jane',
templateUrl: 'views/home/candidates/jane_det.html',
})

.state('antony', {
url: '/antony',
templateUrl: 'views/home/candidates/antony.html',
controller: 'antonyCtrl'
})

.state('antony_det', {
url: '/antony',
templateUrl: 'views/home/candidates/antony_det.html',
})

  .state('studentPresident', {
    url: '/page_prezo',
    templateUrl: 'views/home/studentPresident.html',
    controller: 'studentPresidentCtrl'
  })

  .state('socialAffairs', {
    url: '/page_social',
    templateUrl: 'views/home/socialAffairs.html',
    controller: 'socialAffairsCtrl'
  })

  .state('socialcand', {
    url: '/social',
    templateUrl: 'views/home/socialcand.html',
    controller: 'socialcandCtrl'
  })

  .state('academicAffairs', {
    url: '/page_acad',
    templateUrl: 'views/home/academicAffairs.html',
    controller: 'academicAffairsCtrl'
  })

  .state('acadcand', {
    url: '/acad',
    templateUrl: 'views/home/acadcand.html',
    controller: 'acadCtrl'
  })

  .state('candidates', {
    url: '/page_cand',
    templateUrl: 'views/home/candidates.html',
    controller: 'candidatesCtrl'
  })

  .state('castYourVote', {
    url: '/page_voting',
    templateUrl: 'views/home/castYourVote.html',
    controller: 'castYourVoteCtrl'
  })
    ;
$urlRouterProvider.otherwise("/login");
})
