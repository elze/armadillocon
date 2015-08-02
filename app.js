angular
    .module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
])

.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'mainController'
            })

            .when('/artshow', {
                templateUrl : 'artshow.html',
                controller  : 'mainController'
            })

            .when('/dealers', {
                templateUrl : 'dealers.html',
                controller  : 'mainController'
            })

            .when('/gaming', {
                templateUrl : 'gaming.html',
                controller  : 'mainController'
            })

            .when('/hotel', {
                templateUrl : 'hotel.html',
                controller  : 'mainController'
            })

            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'mainController'
            })

            .when('/policies', {
                templateUrl : 'policies.html',
                controller  : 'mainController'
            })

            .when('/register', {
                templateUrl : 'register.html',
                controller  : 'mainController'
            })

            .when('/writers_workshop', {
                templateUrl : 'writers_workshop.html',
                controller  : 'mainController'
            });


});


