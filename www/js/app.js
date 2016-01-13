// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state ('tabs', {
		url		: '/tab',
		abstract: true,
		templateUrl: 'tmpl/tabs.html'
	})
	
	.state ('tabs.menu', {
		url 	: '/menu',
		views	: {
			'menu-tab' : {
				templateUrl : 'tmpl/menu.html',
				controller	: 'menuController'
			}
		}
	})
	
	.state ('tabs.game', {
		url 	: '/menu/:type',
		views	: {
			'menu-tab' : {
				templateUrl : 'tmpl/game.html',
				controller	: 'appController'
			}
		}
	})
	
	.state ('tabs.scores', {
		url 	: '/scores',
		views	: {
			'scores-tab' : {
				templateUrl : 'tmpl/scores.html',
				controller	: 'scoresController'
			}
		}
	})
	$urlRouterProvider.otherwise('/tab/menu');
})

.controller ('menuController', ['$scope', '$state', '$http',  function ($scope, $state, $http) {
	localStorage.setItem('gameAvailable', "0");
}])


.controller('appController', ['$scope', '$state', '$http', '$timeout', '$ionicPopup', function ($scope, $state, $http, $timeout, $ionicPopup) {
	//load localStorage
	
	var xcounter 	= 0; //yet to figure out
	var myTimeout 	= null;
	var time_ 		= 0;
	$scope.level_name	= '';
	
	/*
	 * alert function
	 */
	$scope.showAlert = function(header, txt) {
        $ionicPopup.alert({
            title: header,
            content: txt
        });
    };
    
    $scope.addScore = (function () {
    	var totalScore = 0;
    	if (localStorage.getItem('totalScore')) totalScore = parseInt(localStorage.getItem('totalScore').toString());
    	localStorage.totalScore = totalScore + parseInt($scope.score);
    });
    
    $scope.setHighScore = (function (){
		var presentHighScore 	= 0;
		
		if (localStorage.getItem('score')) presentHighScore = parseInt(localStorage.getItem('score').toString());

		if (parseInt($scope.score) > presentHighScore) {
			localStorage.level = $scope.level_name;
			localStorage.score = parseInt($scope.score);
		}
	});
	
	$scope.setGamesPlayed = (function () {
		var gamesPlayed = 0;
		if (localStorage.getItem('gamesPlayed')) gamesPlayed = parseInt(localStorage.getItem('gamesPlayed').toString());
		gamesPlayed++;
		console.log(gamesPlayed);
		localStorage.setItem('gamesPlayed', gamesPlayed);
	});
    
	$scope.onTimeout = function () {
		if (xcounter === 0){
			$scope.score = 0;
			$scope.setGamesPlayed(); //increament games played
			$scope.addScore(); //save 0 to the score
			$scope.showAlert("Game Over", "Sorry You Lost This Game");
			$scope.stopTimer('onTimeout');
			$('#game_div').fadeOut(1000);
			$state.go('tabs.menu');
		} else {
			time_ = ('0'+Math.floor(xcounter/60)%60).slice(-2)+':'+('0' + xcounter % 60).slice(-2);
			$('#timer').html(time_);
			myTimeout = $timeout($scope.onTimeout, 1000);
		}
		xcounter--;
	};
	
	$scope.startTimer = function (duration) {
		xcounter = duration;
		myTimeout = $timeout($scope.onTimeout, 1000);
		
	};
	
	$scope.stopTimer = function (txt) {
		localStorage.setItem('gameAvailable', "0");
		$scope.$broadcast('timer-stopped', xcounter, txt);
		$timeout.cancel(myTimeout);
	};
	
	$scope.pauseTimer = function () {
		$scope.$broadcast("timer-paused", xcounter);
		$timeout.cancel(myTimeout);
	};
	
	$scope.resumeTimer = function () {
		$scope.$broadcast("timer-resumed", xcounter);
		myTimeout = $timeout($scope.onTimeout, 1000);
	};
	
	$scope.$on('timer-stopped', function (event, remaining, txt){
		if (remaining === 0) {
		} else xcounter = 0;
	});
	
	$scope.$on('timer-paused', function (event, remaining){
		if (remaining === 0) {
			$scope.showAlert("Sorry You ran out of time!");
			xcounter = 0;
		} else {
			$scope.showAlert('Info.','You Have ['+ remaining+ "] Secounds Left");
		}
	});
	
	$scope.$on('timer-resumed', function (event, remaining){
		if (remaining === 0) {
		}
	});
	
	/** Stop the timer before leave the view**/
   	$scope.$on('$ionicView.beforeLeave', function(){
   		$timeout.cancel(myTimeout);
      	console.log('before leave fired!');
   	});  
   
    $scope.$on('$ionicView.enter', function(){});
   
	$scope.gameType = $state.params.type; // this is the type of game the user wants to play
	
	$scope.matrix 			= suduko();
	time_required			= 0;	
	$scope.space_amt		= 0;
	$scope.finished			= false;
	$scope.paused			= false;
	$scope.bonus_mark		= 0;
	
	if ($scope.gameType == 3) {
		//expert -> 59
		$scope.space_amt	= 59;
		time_required= $scope.space_amt * 3 * 3;
		$scope.bonus_mark	= 3;
		$timeout.cancel(myTimeout); 
		$scope.level_name = 'Expert';
	} else if ($scope.gameType == 2) {
		//average -> 41
		$scope.space_amt	= 41;
		time_required= $scope.space_amt * 3 * 2 * 2;
		$scope.bonus_mark	= 2;
		$timeout.cancel(myTimeout);
		$scope.level_name = 'Basic';
	} else if ($scope.gameType == 1) {
		//easy -> 29
		$scope.space_amt	= 29;
		time_required= $scope.space_amt * 3 * 1 * 3;
		$scope.bonus_mark	= 1;
		$timeout.cancel(myTimeout);
		$scope.level_name = 'Starter';
	} else {
		$scope.space_amt	= 0;
		time_required= $scope.space_amt * 3 * 1 * 3;
		$scope.bonus_mark	= 1;
		$timeout.cancel(myTimeout);
	}
	
	$scope.startTimer(time_required);
	$scope.x 		= get_both_matrix($scope.matrix, $scope.space_amt);
	$scope.table 	= create_table("tb", $scope.matrix);
	
	$scope.submitGame 	= (function () {
		//get all the filled parts of the array 
		var error = false;
		var wrong = false;
		$('.insert').each(function () {
			var id 	= $(this).attr('id');
			var val = $(this).val(); 
			
			if (val.length < 1) {
				error = true;
			} else {
				//compare all results with the scope.matrix
				var point 	= new Object();
				point.x 	= id.toString().substring(5, 6); 
				point.y 	= id.toString().substring(6); 
				point.value = val;
				
				var emp 	= $scope.x.spaces;
				for (var count =0; count<emp.length; count++) {
					var dash = emp[count];
				}
			
				for (var o=0; o<$scope.x.spaces.length; o++) {
					var dat = $scope.x.spaces[o];
					if ((dat.x == point.x) && (point.y == dat.y)) {
						if (dat.value != point.value) {
							wrong = true;
						}
					}
				}
			} 
		});
		
		if (wrong === true || error === true) {
			$scope.showAlert("Please recheck answers!");
		} else {
			//calculate the scoe by multiplying the level by the time left
			$scope.score = $scope.bonus_mark * xcounter;
			$scope.addScore(); //add this to the bank of scores
			$scope.setHighScore(); //set the highscore
			$scope.setGamesPlayed(); //increament games played
			$scope.showAlert("Game Won! Score:["+$scope.score+" Point(s)]");
			$scope.stopTimer('game win');
			$('#game_div').fadeOut(1000);
			$state.go('tabs.menu');
		}
	});
	
	$scope.pauseGame 	= (function () {
		$scope.paused	= true;
		$('#game_div').fadeOut(1000);
		$scope.pauseTimer();
	});
	
	$scope.continueGame	= (function () {
		$scope.paused	= false;
		$('#game_div').fadeIn(1000);
		$scope.resumeTimer();
	});
	
	/* set the height of the game display */
	
	var navs 	= $('.tab-nav').height();
	var header 	= $('.bar-header').height(); 
	var content	= $('.scroll-content');
	
	$('.container-full').css({marginLeft: -5, marginTop: -14, bottom: 0});
	$('.sudoku-container').css({height 	: (content.height() - ((navs * 2) + 10)), width: (content.width() * 0.97),});

}])

.controller('scoresController', ['$scope', '$state', function ($scope, $state) {
	$scope.level 		= 'Starter';//set scope value for level where highest score was gotten from
	$scope.score		= 0; //highest score gotten
	$scope.average		= 0; //average sore gotten
	$scope.gamesPlayed 	= 0;
	$scope.totalScore 	= 0;
	
	$scope.$on('$ionicView.enter', function(){
		$scope.loadScores();
	});
	
	$scope.loadScores = (function () {
		//set scope value for games plaed 
		if (localStorage.getItem('gamesPlayed')) $scope.gamesPlayed = parseInt(localStorage.getItem('gamesPlayed').toString());
		if (localStorage.getItem('level')) $scope.level = localStorage.getItem('level').toString();
		if (localStorage.getItem('score')) $scope.score = parseInt(localStorage.getItem('score').toString());
    	if (localStorage.getItem('totalScore')) $scope.totalScore = parseInt(localStorage.getItem('totalScore').toString());
		
		if ($scope.gamesPlayed > 0 && $scope.score > 0)
			$scope.average = $scope.score / $scope.gamesPlayed;
			
		console.log($scope.gamesPlayed);	
	});
	
}])
