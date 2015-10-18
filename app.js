var titleDictionary = {
  "about" : "About",
  "artshow": "Art show",
  "contact" : "Contact",
  "dealers": "Dealers",
  "gaming": "Gaming",
  "guest_bios": "Guest bios",
  "guests": "Guests",
  "hotel": "Hotel",
  "policies": "Policies",
  "register": "Register",
  "sched": "Schedule Grid",
  "writers_workshop": "Writers' workshop"};

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

            .when('/sched', {
                templateUrl : 'sched.html',
                controller  : 'mainController'
            })

            .when('/writers_workshop', {
	      title: "Writers workshop: Armadillocon 37: not the real site",
                templateUrl : 'writers_workshop.html',
                controller  : 'mainController'
            });


}).run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    //$rootScope.$on("$locationChangeStart",function(event, next, current){
    $rootScope.$on("$routeChangeStart",function(event, obj){
	var origPath = obj.$$route.originalPath;
	console.log("app.run: route changing to:" + origPath); 
	var postscribeTheCounter = false;
	if ((origPath === "") || (origPath === "/")) {
	  if (!$rootScope.title) {
	    $rootScope.title = "Home";
	    postscribeTheCounter = true;
	  }
	}
	else {
	  //$rootScope.title = titleDictionary[locationParts[locationParts.length - 1]];
	  var pathLastPart = origPath.substring(1);
	  $rootScope.title = titleDictionary[pathLastPart];
	  postscribeTheCounter = true;
	}

	if (postscribeTheCounter) { 
	  sc_project=2721969;	
	  sc_invisible=0;
	  sc_security="5cfe5782";

	  var scURL = 'http://www.statcounter.com/counter/counter.js';

	  var scImg = 'http://c29.statcounter.com/2721969/0/5cfe5782/0/';
	  //postscribe('#statcounterInd', '');
	  angular.element(document.getElementById('statcounterInd')).empty();
	  postscribe('#statcounterInd', '<script src="' + scURL + '"><img class="statcounter" src="' + scImg + '" alt="free hit counter"><\/script>');
	}
    });
});


