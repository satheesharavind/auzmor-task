var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.htm"
    })
    .when("/profile", {
        templateUrl : "pages/profile.htm"
    })
    .when("/weight", {
        templateUrl : "pages/weight.htm"
    })
    .when("/home", {
        templateUrl : "pages/home.htm"
    });
});

/*angular.module('myApp', []).controller('CounterController', function($scope, $timeout) {
    $scope.counter = 0;
    var updateCounter = function() {
        $scope.counter++;
        $timeout(updateCounter, 1000);
    };
    updateCounter();
});*/

wow = new WOW({
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
});
wow.init();

/*$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});*/
/*var decimal_places = 1;
var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

$('#target').animateNumber(
{
  number: 54.7 * decimal_factor,
  color: '#596472',
  //'font-size': '30px',

  numberStep: function(now, tween) {
    var floored_number = Math.floor(now) / decimal_factor,
        target = $(tween.elem);
    if (decimal_places > 0) {
      floored_number = floored_number.toFixed(decimal_places);
    }

    target.text(floored_number);
  }
},
5000
)*/