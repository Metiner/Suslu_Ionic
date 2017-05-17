/**
 * Created by metinerk on 01.03.2016.
 */
angular.module('appControllers', [])

    .controller('HomeCtrl',function($scope,$cordovaCamera,$http,$ionicPopup){
    $scope.pictureUrl;
    $scope.pictures = [];
    var pictureData_1,pictureData_2,pictureData_3;
     // GELECEK FOTOGRAF DATA BİLGİSİ


    // KAMERA VE GALERİDEN FOTOGRAF DATASI ALMA
    $scope.takePicture = function(){
        var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG
        };
        if($scope.pictures.length < 4){
        $cordovaCamera.getPicture(options)
            .then(function(data){
                
                $scope.pictures.push('data:image/jpeg;base64,' + data);
                
                pictureData_1 = $scope.pictures[0];
                pictureData_2 = $scope.pictures[1];
                pictureData_3 = $scope.pictures[2];
                
                $scope.pictures;
                console.log($scope.pictures);
                
            },function(error){
                console.log('camera error: ' + angular.toJson(data));
            });
        }else{

         
		   var alertPopup = $ionicPopup.alert({
		     title: 'Uyarı !',
		     template: 'En fazla 4 fotograf ekleyebilirsiniz.',
		     text: 'Tamam'
		   });

		   alertPopup.then(function(res) {
		     console.log('Thank you for not eating my delicious ice cream cone');
		   });
		 };
        
        }
        

        $scope.choosePhoto = function(){
            var options = {
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: Camera.EncodingType.JPEG
            };
            if($scope.pictures.length < 4){
        
            $cordovaCamera.getPicture(options)
                .then(function(data){

                	$scope.pictures.push('data:image/jpeg;base64,' + data);

                	pictureData_1 = $scope.pictures[0];
                	pictureData_2 = $scope.pictures[1];
                	pictureData_3 = $scope.pictures[2];
                	
                    $scope.pictures;
                    console.log($scope.pictures);
                },function(err){

                });
        	}else{

         
		   var alertPopup = $ionicPopup.alert({
		     title: 'Uyarı !',
		     template: 'En fazla 4 fotograf ekleyebilirsiniz.',
		     text: 'Tamam'
		   });

		   alertPopup.then(function(res) {
		     console.log('Thank you for not eating my delicious ice cream cone');
		   });
		 };
        }

    // ------------------------------------------------

      // Yeni konu girişi-------------------
      $scope.update = function(konu){
        var formValues = {
        	'baslik' : konu.baslik,
        	'kategori': konu.kategori,
        	'icerik' : konu.icerik,
        	'pictureData_1': pictureData_1,
        	'pictureData_2': pictureData_2,
        	'pictureData_3': pictureData_3,
        	'begeniler' : 0,
        	'yorumlar' : ""
        };
        
        $http({
                    url:'http://localhost:3000/createPost',
                    method:'POST',
                    data:{formValues}
                }).then(function successCallback(response) {
                   
                  }, function errorCallback(response) {
                  });

      }
      //-------------------------------------


    });
