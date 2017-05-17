





var apiAddress = "http://localhost:3000/";
var videoType = 'youtubeVideosPopular';
var storedUrunData; // Seçilen Markaya ait ürün bilgileri.

angular.module('ionicApp', ['ionic','ngRoute','ngCordova','appControllers','ionic-ratings'])
.controller('MyCtrl', ['$scope', '$http', '$state','$timeout',

    function($scope, $http, $state,$timeout,StoringData) {

      // Sohbet Konuları Sayfa Değişimi
      $scope.changeSohbet = function(type){

        

          $http({
            url : apiAddress + 'getSohbet',
            method : 'POST',
            data : {type} 
          }).then(function successCallback(response){
              $scope.cards = response.data;

          },function errorCallback(response){
              console.log("error");
          });
      }
            
              $scope.ratingsObject = {
          iconOn : 'ion-ios-star',
          iconOff : 'ion-ios-star-outline',
          iconOnColor: 'rgb(200, 200, 100)',
          iconOffColor:  'rgb(200, 100, 100)',
          
          minRating:1,
          callback: function(rating) {
            $scope.ratingsCallback(rating);
          }
        };

        $scope.ratingsCallback = function(rating) {
          console.log('Selected rating is : ', rating);
        };
        $scope.ratingsCallback = function(rating) {
          console.log('Selected rating is : ', rating);
        };
      // Markaya göre gelen ürünleri listeleme
      $scope.changeUrun = function(type){

          $http({
          url : apiAddress + 'getUrunler',
          method : 'POST',
          data : {type}
        }).then(function successCallback(response){
            
            storedUrunData = response.data;
            $scope.urunler = storedUrunData;


        },function errorCallback(response){
          console.log("error");
        });
      };

      //------------------------------------


          //videoType = "youtubeVideosPopular";
          /*$http.get(apiAddress + 'testApi').success(function (data) {
            console.log(data);
            $scope.items = data;

          });*/
        


        /*if(type === 'dudak') {
          videoType = "youtubeVideosDudak";
          console.log(videoType);
          $http.get('js/data.json').success(function (data) {

            if (videoType === 'youtubeVideosDudak') {
              $scope.items = data.youtubeVideosDudak;
              console.log($scope.items);

            }

          });
        }
        /*
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
        */
      
      //------------------------------------------

}])

.controller('MyCtrl2',['$scope','$http','$state',function($scope,$http,$state,StoringData){

  $scope.urunler = storedUrunData;
  $scope.urunTitle = $state.params.aId;


}])

.config(function($sceProvider,$stateProvider,$urlRouterProvider,$routeProvider,$ionicConfigProvider){
  // ANDROID VE IOS'TA EKRANLARIN AYNI GÖRÜNMESİ
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.tabs.style("standard");
  $ionicConfigProvider.navBar.alignTitle("center");
  //---------------------------------------------
  //SAYFALARIN URL,CONTROLLER KONTROLÜ
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
  .state('tabs.urunDetail',{
    url:'/urunler/:aId',
    views:{
      'urunler-tab':{
        templateUrl:'pages/urunlerDetail.html',
        controller : 'MyCtrl2'
      }
    }
  })
    .state('tabs.sohbet',{
      url:'/sohbet',
      views:{
          'sohbet-tab' : {
                templateUrl:'pages/sohbet.html',
          controller:'MyCtrl'
          }
      }
  })
    .state('tabs.videoPopuler',{
      url:'/videoPopular',
      views:{
        'popular-tab':{
          templateUrl:'pages/videosPopular.html',
          controller : 'MyCtrl'
        }
      }
    })
      .state('createPost',{
          url:'/createPost',
          templateUrl:'pages/createPost.html',
          controller : 'HomeCtrl'
      })

	$urlRouterProvider.otherwise('/tab/videosPage');
  //-------------------------------------------------
})
