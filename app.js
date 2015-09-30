angular
    .module('app', [
		    'ngRoute',
		    'ui.bootstrap'
])

.config(function($routeProvider) {
        $routeProvider

            .when('/', {
	      title: "Home: Armadillocon 37: not the real site",
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            .when('/about', {
	      title: "About: Armadillocon 37: not the real site",
                templateUrl : 'about.html',
                controller  : 'mainController'
            })

            .when('/artshow', {
	      title: "Art show: Armadillocon 37: not the real site",
                templateUrl : 'artshow.html',
                controller  : 'mainController'
            })

            .when('/contact', {
	      title: "Contact: Armadillocon 37: not the real site",
                templateUrl : 'contact.html',
                controller  : 'mainController'
            })

            .when('/contact/:receivedMode', {
                templateUrl : 'contact.html',
                controller  : 'mainController'
            })

            .when('/dealers', {
	      title: "Dealers: Armadillocon 37: not the real site",
                templateUrl : 'dealers.html',
                controller  : 'mainController'
            })

            .when('/gaming', {
	      title: "Gaming: Armadillocon 37: not the real site",
                templateUrl : 'gaming.html',
                controller  : 'mainController'
            })

            .when('/guest_bios', {
	      title: "Guest bios: Armadillocon 37: not the real site",
                templateUrl : 'guest_bios.html',
                controller  : 'mainController'
            })

            .when('/guests', {
	      title: "Guests: Armadillocon 37: not the real site",
                templateUrl : 'guests.html',
                controller  : 'mainController'
            })

            .when('/hotel', {
	      title: "Hotel: Armadillocon 37: not the real site",
                templateUrl : 'hotel.html',
                controller  : 'mainController'
            })

            .when('/policies', {
	      title: "Policies: Armadillocon 37: not the real site",
                templateUrl : 'policies.html',
                controller  : 'mainController'
            })

            .when('/register', {
	      title: "Register: Armadillocon 37: not the real site",
                templateUrl : 'register.html',
                controller  : 'mainController'
            })

            .when('/writers_workshop', {
	      title: "Writers workshop: Armadillocon 37: not the real site",
                templateUrl : 'writers_workshop.html',
                controller  : 'mainController'
            });


}).run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    $rootScope.$on("$locationChangeStart",function(event, next, current){
	console.log("app.run: location changing to:" + next); 
	var locationParts = next.split("/"); 
	$rootScope.title = locationParts[locationParts.length - 1];
    });
});


