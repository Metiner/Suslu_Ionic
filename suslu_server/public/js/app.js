


var apiAddress = "http://localhost:3000/";
var myApp = angular.module('ionicApp', ['ionic','ngRoute'])
var videoType = 'youtubeVideosPopular';
myApp.controller('MyCtrl', ['$scope', '$http',

    function($scope, $http ) {
      $scope.change = function(type){

        if(type === 'popular') {
          videoType = "youtubeVideosPopular";
          $http.get(apiAddress + 'testApi').success(function (data) {
            console.log(data);
            if (videoType === 'youtubeVideosPopular') {
              $scope.items = data.youtubeVideosPopular;
              console.log($scope.items);

            }

          });
        }
        if(type === 'dudak') {
          videoType = "youtubeVideosDudak";
          console.log(videoType);
          $http.get('js/data.json').success(function (data) {

            if (videoType === 'youtubeVideosDudak') {
              $scope.items = data.youtubeVideosDudak;
              console.log($scope.items);

            }

          });
        }
        if(type === 'ogretici') {
          videoType = "youtubeVideosOgretici";
          console.log(videoType);
          $http.get('js/data.json').success(function (data) {

            if (videoType === 'youtubeVideosOgretici') {
              $scope.items = data.youtubeVideosOgretici;
              console.log($scope.items);

            }

          });
        }

        if(type === 'yuz') {
          videoType = "youtubeVideosYuz";
          console.log(videoType);
          $http.get('js/data.json').success(function (data) {

            if (videoType === 'youtubeVideosYuz') {
              $scope.items = data.youtubeVideosYuz;
              console.log($scope.items);

            }

          });
        }
      }

}]);

myApp.config(function($sceProvider,$stateProvider,$urlRouterProvider,$routeProvider,$ionicConfigProvider){

  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.tabs.style("standard");
  $ionicConfigProvider.navBar.alignTitle("center");


  $stateProvider

	.state('tabs',{
		url:'/tab',
		abstract: true,
		templateUrl : 'pages/tabs.html'
	})
	.state('tabs.videosPage',{
		url:'/videosPage',
		views:{
			'videosPage-tab':{
				templateUrl:'pages/videosPopular.html',
				controller : 'MyCtrl'
			}
		}
	})
	.state('tabs.urunler',{
		url:'/urunler',
		views:{
			'urunler-tab':{
				templateUrl:'pages/urunler.html',
        controller:'MyCtrl'
			}
		}
	})
    .state('tabs.videoPopuler',{
      url:'/videoPopular',
      views:{
        'popular-tab':{
          templateUrl:'pages/videosPopular.html',
          controller:'MyCtrl'
        }
      }
    })

	$urlRouterProvider.otherwise('/tab/videosPage');
	$sceProvider.enabled(false);
});
