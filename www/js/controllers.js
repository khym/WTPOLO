angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope,$http, $interval, $ionicLoading, $ionicModal, $timeout,$state,MyDomain,NgMap ) {
  
//    $ionicLoading.show({
//     content: 'Loading',
//     animation: 'fade-in',
//     showBackdrop: true,
//     maxWidth: 200,
//     showDelay: 0
//   });

// ionic.DomUtil.ready(function(){

//        $timeout(function () {
//     $ionicLoading.hide();
//   }, 5000);
//      });

  $scope.url_domain = MyDomain.get();


 

  $scope.address = "current-location";

  $scope.u_address = "current-location";
  $scope.priceSlider = {
    min: 100,
    max: 8000,
    ceil: 8000,
    floor: 0
  };



  //  $scope.getDetail=function(ObjectData){
  // detailService.itemName=ObjectData.title;
  // }


  // จับกลุ่ม cluster 
   // var vm = this;
   // vm.dynMarkers = []
   //  NgMap.getMap().then(function(map) {
   //    var bounds = new google.maps.LatLngBounds();
   //    for (var k in map.customMarkers) {
   //      var cm = map.customMarkers[k];
   //      vm.dynMarkers.push(cm);
   //      bounds.extend(cm.getPosition());
   //    };
      
   //    vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
   //    map.setCenter(bounds.getCenter());
   //    map.fitBounds(bounds);  
   // });



$scope.devList = [
    { text: "Not Allow Pet", checked: false, img: "http://"+$scope.url_domain+"/pic/no_pet.png"},
    { text: "Wifi Network", checked: false, img: "http://"+$scope.url_domain+"/pic/wifi.png" },
    { text: "TV", checked: false, img: "http://"+$scope.url_domain+"/pic/tv.png" },
    { text: "No Smoking", checked: false, img: "http://"+$scope.url_domain+"/pic/no_smoking.png" },
    { text: "Fan", checked: false, img: "http://"+$scope.url_domain+"/pic/fan.png" },
    { text: "Air Conditioner", checked: false, img: "http://"+$scope.url_domain+"/pic/air.png" },
    { text: "Washing Machine", checked: false, img: "http://"+$scope.url_domain+"/pic/washing_machine.png" },
    { text: "CCTV", checked: false, img: "http://"+$scope.url_domain+"/pic/cctv.png" },
    { text: "Elevator", checked: false, img: "http://"+$scope.url_domain+"/pic/elevator.png" },
    { text: "Fitness ", checked: false, img: "http://"+$scope.url_domain+"/pic/gym.png" },
    { text: "Key Card System", checked: false, img: "http://"+$scope.url_domain+"/pic/keycard.png" },
    { text: "Wire Network", checked: false, img: "http://"+$scope.url_domain+"/pic/lan.png" },
    { text: "Security", checked: false, img: "http://"+$scope.url_domain+"/pic/security.png" },
    { text: "Shower", checked: false, img: "http://"+$scope.url_domain+"/pic/shower.png" },
    { text: "Swimming Pool", checked: false, img: "http://"+$scope.url_domain+"/pic/swim_pool.png" }
    // { text: "Security", checked: false, img: "http://"+$scope.url_domain+"/pic/security.png" },
  ];

  $scope.type = {
    m : false,
    w : false,
    a : false
  };

$scope.dor_datas = [];

$scope.types = "['establishment']";

$ionicModal.fromTemplateUrl('templates/custom_search.html', {

  scope: $scope
}).then(function(modal) {

  $scope.modal = modal;


});

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.search = function() {
    $scope.modal.show();
  };

  $scope.placeChanged = function() {
    $scope.place = this.getPlace();
  }

   $scope.change = function(test) {

      if ($scope.value_hide !== false )
      $scope.value_hide = !$scope.value_hide;

         // $http.get("http://localhost/angular_testjson/php_getjson.php?text="+test+"")
         $http.get("http://"+$scope.url_domain+"/angular_testjson/php_getjson.php?text="+test+"")

         //$http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+$scope.greeting+"&key=AIzaSyAL5HaZjZhmO9UgU4mi0xqEzxiy8BFlCqw")
      .success(function (response,status, headers, config) {
        // console.log(test);

        // console.log(status);
        //   console.log(headers);
        //   console.log(config);
          
        $scope.names = response.predictions;
      // console.log($scope.names);
      }).error(function(status, headers, config) {


          // console.log(status);
          // console.log(headers);
          // console.log(config);
      });


    };


  $scope.doSearch = function(d_places) {

      $scope.reset = 0 ;
      // alert(d_places.place);
      console.log($scope.devList[0].checked,$scope.devList[1].checked,$scope.devList[2].checked,$scope.devList[3].checked,$scope.devList[4].checked,$scope.devList[5].checked,$scope.devList[6].checked);
      $scope.address = d_places.place;
      // console.log("submit"+$scope.address);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

$scope.data = [];
$scope.value_hide = false;
    $scope.click_places = function(n_places) {

      $scope.value_hide = !$scope.value_hide;
      $scope.data.place = n_places;
      // alert(n_places);
      // console.log("click"+$scope.data.place);

    };

// $scope.SetBoolean = function (x){
// if(x == "0"){
//   return false;
// }else{
//   return true;
// }

// };

// $scope.SetType = function (x,y){
// if(x == "1" && y == "1"){
//   return "all";
// }else if(x == "1" && y == "0"){
//   return "men";
// }else{
//   return "women";
// }

// };

$scope.byRange = function (fieldName, minValue, maxValue ) {
  if (minValue === undefined) minValue = Number.MIN_VALUE;
  if (maxValue === undefined) maxValue = Number.MAX_VALUE;

    return function predicateFunc(item) {

            return  ( minValue <= item[fieldName] && item[fieldName] <= maxValue ) ;

      }
  
 
  };

// $scope.byType = function (fieldName, Value,m,w) {

//   if (Value === undefined) return true;


//     return function predicateFunc(item) {

//             return  ( item[fieldName] == Value ) ;

//       }
  
 
//   };



  $scope.$on('mapInitialized', function(event, map) {

    $scope.map = map;

  });

   $scope.fake_centerOnMe = function() {
  $scope.address = "13.283255,100.929227";
  $scope.u_address = "13.283255,100.929227";
   }



 $scope.centerOnMe = function() {


        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          // console.log(pos);
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.u_address = ""+pos.coords.latitude+","+pos.coords.longitude+"";
           $ionicLoading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });

      };

         $scope.doRefresh = function() {
          window.location.reload(true)
    // $http.get("http://192.168.1.35/angularjs/get_data.php")
    //  .success(function(response,status, headers, config) {
    //    $scope.json_res = response;
    //  })
    //  .finally(function() {
    //    // Stop the ion-refresher from spinning
    //    $scope.$broadcast('scroll.refreshComplete');
    //  });
  };


           $http.get("http://"+$scope.url_domain+"/angularjs/get_data.php")
    .success(function (response,status, headers, config) {
        $scope.json_res = response;
        
        // console.log($scope.json_res);
    //     $scope.count_json = Object.keys($scope.json_res).length;

    //  for (var i = 0 ; i < $scope.count_json; i++) {

    //     console.log($scope.json_res["+i+"],$scope.json_res[i]);

    //     $scope.dor_datas[i] =  {
    //     dor_id: $scope.json_res[i].dor_id,  
    //     dor_name: $scope.json_res[i].dor_name,
    //     dor_prize: $scope.json_res[i].dor_prize,
    //     lat: $scope.json_res[i].lat,
    //     lng: $scope.json_res[i].lng,
    //     // dor_prize_max:$scope.json_res[i].dor_prize,
    //     dor_m_type: $scope.SetBoolean($scope.json_res[i].dor_m_type),
    //     dor_w_type: $scope.SetBoolean($scope.json_res[i].dor_w_type),
    //     dor_all_type: $scope.SetBoolean($scope.json_res[i].dor_all_type),

    //     dor_pet: $scope.SetBoolean($scope.json_res[i].dor_pet),
    //     dor_wifi: $scope.SetBoolean($scope.json_res[i].dor_wifi),
    //     dor_tv: $scope.SetBoolean($scope.json_res[i].dor_tv),


    //     marker: "http://"+$scope.url_domain+"/mmarker/maker_marker.php?text="+$scope.json_res[i].dor_prize+"%20บาท/เดือน&price="+$scope.json_res[i].dor_name 

    // };
    //               };

        // console.log($scope.dor_datas);

      }).error(function(status, headers, config) {

          console.log("dddddd"+status);
          console.log(headers);
          console.log(config);
      });


$scope.click = function(res,id) {
    console.log(id);
    $state.go('profile', {id: id});
    // alert(JSON.stringify(id));
  }

})

.controller('ProfileCtrl',function($localstorage, $ionicPopup, $timeout,$ionicHistory,$ionicModal, $ionicSideMenuDelegate,$scope, $stateParams,$rootScope, $ionicHistory, $ionicBackdrop, $timeout,  $ionicLoading,MyDomain,$http,$ionicScrollDelegate){
  $scope.dor_id = $stateParams.id;
  $scope.user_id = $localstorage.getObject('uid');

  // window.localStorage.removeItem('Favorite');
  $localstorage.setObject('Favorite', ['14']);

 // console.log("getttt",window.localStorage.getItem('Favorite'));

  console.log("$scope.user_id",$scope.user_id);
   $scope.url_domain = MyDomain.get();

$scope.check_login = function(){
var uid = $localstorage.getObject('uid');
if(uid==0){
  return false;
}else{
  return true;
}
}

if($scope.check_login()){

  $scope.name_fav = "Favorite_form_db";
  $scope.name_bk = "Booking_form_db";
}else{
    $scope.name_fav = "Favorite";
  $scope.name_bk = "Booking";
}
console.log($scope.name_fav,$scope.name_bk);

 $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.check_login = function(){
var uid = $localstorage.getObject('uid');
if(uid==0){
  return false;
}else{
  return true;
}

}


  $scope.isActive = true;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive
    
  }  

   $scope.img_none = "http://"+$scope.url_domain+"/pic/Outlined Star-96.png";
   $scope.img_active = "http://"+$scope.url_domain+"/pic/Star Filled-96.png";
   $show_fav = true;

   $scope.favorite2db = function( ) {
      var datas = {
                      userid : $scope.user_id,
                      dorid :  $scope.dor_id
                    };
                    // console.log("datas",datas);

$http.post("http://"+$scope.url_domain+"/angularjs/favor.php", datas).success(function(data,status,headers,config){
      console.log("data insert success");
    });

  }
  $scope.booking2db = function( ) {
        var datas = {
                      userid : $scope.user_id,
                      dorid :  $scope.dor_id
                    };

  $http.post("http://"+$scope.url_domain+"/angularjs/booking.php", datas).success(function(data,status,headers,config){
      console.log("data insert success");
    });

}

  $scope.remove = function(item,name_data) { 
    // console.log('item',item);
    $scope.name_obj = name_data; 

    $scope.datas_book = $localstorage.getObject($scope.name_obj);
    var out = [];

    angular.forEach($scope.datas_book, function(value, key) {
// console.log(value, key); 
  if (value == item) {
    // console.log("item == value");        
    //   }else{
    //     out.push(item)
    // console.log("in if"); 
      }else{
        // console.log("in else");
         out.push($scope.datas_book[key])
      }
      // console.log('out',out);
})

    $localstorage.setObject($scope.name_obj,out);
}

  $scope.ADD_or_DEL = function(check_data,name_data,data){
      $scope.datas = [];
     $scope.get_data = data;
    if (check_data) {

          console.log("dd",$scope.checked_fav(data));
          $scope.datas = $localstorage.getObject(name_data);
          console.log('$scope.datas',name_data,$scope.datas);
            $scope.datas.push(data);

            $localstorage.setObject(name_data,$scope.datas);    
            $scope.datas = $localstorage.getObject(name_data);

          } else {

          console.log("sss",$scope.checked_fav(data));
          $scope.remove(data,name_data);
          }
  }

  $scope.addBooking = function(data,name_data) {
 $scope.name_obj = name_data; 
  // console.log(data,name_data);

switch($scope.name_bk) {
    case "Booking":
        // console.log("Booking");
        // $scope.check_uid = ($scope.check_login()==true);
        // $scope.check_name_data = $scope.checked_booking(data);
        // if($scope.check_uid){
        // $scope.ADD_or_DEL($scope.check_name_data,$scope.name_obj,data);
        // $scope.booking2db();
        // }else{
             var alertPopup = $ionicPopup.alert({
           title: 'Can\'t Booking!',
           template: 'Please login your account'
         });
         alertPopup.then(function(res) {
           // console.log('Thank you for not eating my delicious ice cream cone');
         });
        // }
        break;
    case "Booking_form_db":
        console.log("Booking_form_db");
        $scope.check_uid = ($scope.check_login()==true);
        $scope.check_name_data = $scope.checked_booking(data);
        $scope.ADD_or_DEL($scope.check_name_data,$scope.name_bk,data);
        $scope.booking2db();
        break;
    }
  }

  $scope.addFavorite = function(data,name_data) {

  $scope.name_obj = name_data; 
  // console.log(data,name_data);

switch($scope.name_fav) {
    // case "Booking":
    //     // console.log("Booking");
    //     // $scope.check_uid = ($scope.check_login()==true);
    //     // $scope.check_name_data = $scope.checked_booking(data);
    //     // if($scope.check_uid){
    //     // $scope.ADD_or_DEL($scope.check_name_data,$scope.name_obj,data);
    //     // $scope.booking2db();
    //     // }else{
    //          var alertPopup = $ionicPopup.alert({
    //        title: 'Can\'t Booking!',
    //        template: 'Please login your account'
    //      });
    //      alertPopup.then(function(res) {
    //        // console.log('Thank you for not eating my delicious ice cream cone');
    //      });
    //     // }
    //     break;
    case "Favorite":
        console.log("Favorite");
        $scope.check_uid = ($scope.check_login()==true);
        $scope.check_name_data = $scope.checked_fav(data);
        console.log($scope.check_name_data,$scope.name_obj,data);
        $scope.ADD_or_DEL($scope.check_name_data,$scope.name_obj,data);
        // if($scope.check_uid){
        // $scope.favorite2db();
        // }

        break;
    case "Favorite_form_db":
        console.log("Favoriteaaaa");
        $scope.check_uid = ($scope.check_login()==true);
        $scope.check_name_data = $scope.checked_fav(data);
        $scope.ADD_or_DEL($scope.check_name_data,$scope.name_fav,data);
        if($scope.check_uid){
        $scope.favorite2db();
        }
        break;
    // case "Booking_form_db":
    //     console.log("Booking_form_db");
    //     // $scope.check_uid = ($scope.check_login()==true);
    //     // $scope.check_name_data = $scope.checked_fav(data);
    //     // $scope.ADD_or_DEL($scope.check_name_data,$scope.name_fav,data);
    //     // if($scope.check_uid){
    //     // $scope.favorite2db();
    //     // }
    //     break;

    }

}


//   $scope.addBooking = function(data) { 
//   // var index = $scope.datas.indexOf(item);

//   $scope.datas = $localstorage.getObject('Booking');
//   $scope.datas.push(data); 
//   $localstorage.setObject('Booking',$scope.datas);    
//   $scope.datas = $localstorage.getObject('Booking');

// }

$scope.checked_book = function(dor_id){

return true;
//   $scope.datas = $localstorage.getObject('Favorite');

//   for (var i = $scope.datas.length - 1; i >= 0; i--) {
//     if ( dor_id === $scope.datas[i])
//      { 

//           return false;
//     }

//   }
// return true;


}

$scope.checked_booking = function(dor_id){

  $scope.datas = $localstorage.getObject($scope.name_bk);

  for (var i = $scope.datas.length - 1; i >= 0; i--) {
    if ( dor_id === $scope.datas[i])
     { 

          return false;
    }

  }
return true;
// }

}



$scope.checked_fav = function(dor_id){

  $scope.datas = $localstorage.getObject($scope.name_fav);

  for (var i = $scope.datas.length - 1; i >= 0; i--) {
    if ( dor_id === $scope.datas[i])
     { 

          return false;
    }

  }
return true;


}


// $scope.checked_book = function(dor_id){
//   $scope.datas = $localstorage.getObject('Favorite');
//   angular.forEach($scope.datas, function(value, key) {

//   if (dor_id == value) {
//     // console.log(language.dor_id);
//     //     out.push(language)
//     $scope.img_fav = "http://"+$scope.url_domain+"/pic/Star Filled-96.png";
//       }else{
//         $scope.img_fav = "http://"+$scope.url_domain+"/pic/Outlined Star-96.png";
//       }
// })

// }


//   $ionicLoading.show({
//     content: 'Loading',
//     animation: 'fade-in',
//     showBackdrop: true,
//     maxWidth: 200,
//     showDelay: 0
//   });

// ionic.DomUtil.ready(function(){

//        $timeout(function () {
//     $ionicLoading.hide();
//   }, 2000);
//      });

   $rootScope.slideHeader = false;

   $scope.fac_etc = true;

$scope.devList = [
    { text: "Not Allow Pet", checked: false, img: "http://"+$scope.url_domain+"/pic/no_pet.png"},
    { text: "Wifi Network", checked: false, img: "http://"+$scope.url_domain+"/pic/wifi.png" },
    { text: "TV", checked: false, img: "http://"+$scope.url_domain+"/pic/tv.png" },
    { text: "No Smoking", checked: false, img: "http://"+$scope.url_domain+"/pic/no_smoking.png" },
    { text: "Fan", checked: false, img: "http://"+$scope.url_domain+"/pic/fan.png" },
    { text: "Air Conditioner", checked: false, img: "http://"+$scope.url_domain+"/pic/air.png" },
    { text: "Washing Machine", checked: false, img: "http://"+$scope.url_domain+"/pic/washing_machine.png" },
    { text: "CCTV", checked: false, img: "http://"+$scope.url_domain+"/pic/cctv.png" },
    { text: "Elevator", checked: false, img: "http://"+$scope.url_domain+"/pic/elevator.png" },
    { text: "Fitness ", checked: false, img: "http://"+$scope.url_domain+"/pic/gym.png" },
    { text: "Key Card System", checked: false, img: "http://"+$scope.url_domain+"/pic/keycard.png" },
    { text: "Wire Network", checked: false, img: "http://"+$scope.url_domain+"/pic/lan.png" },
    { text: "Security", checked: false, img: "http://"+$scope.url_domain+"/pic/security.png" },
    { text: "Shower", checked: false, img: "http://"+$scope.url_domain+"/pic/shower.png" },
    { text: "Swimming Pool", checked: false, img: "http://"+$scope.url_domain+"/pic/swim_pool.png" }
    // { text: "Security", checked: false, img: "http://"+$scope.url_domain+"/pic/security.png" },
  ];
  
   $ionicModal.fromTemplateUrl('templates/fac_descript.html', {

  scope: $scope
}).then(function(modal) {
$scope.fac_descript_modal = modal;

});

  $scope.close_Fac_descript = function() {
    $scope.fac_descript_modal.hide();
  };

  // Open the login modal
  $scope.fac_descript = function() {
    $scope.fac_descript_modal.show();
  };


  console.log("dor_id",$stateParams.id);
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.GoRoute = function(x,y)
{

  console.log("x,y",x,y);

 window.open("https://www.google.co.th/maps/dir//"+x+","+y+"/@"+x+","+y+"",'_system','location=yes');
  
};

  

  


   $http.get("http://"+$scope.url_domain+"/angularjs/get_data_byid.php?text="+$scope.dor_id+"")
    .success(function (response,status, headers, config) {
        // $scope.json_first = response;
        
        $scope.json_res = response;
        $scope.checked_fav($scope.json_res[0].dor_id);
  console.log($scope.json_res);


      }).error(function(status, headers, config) {

          console.log("dddddd"+status);
          console.log(headers);
          console.log(config);
      });



})

.controller('Create_dormitoryCtrl', function($scope, $cordovaCamera, $cordovaFileTransfer, $cordovaDevice, $cordovaFile,MyDomain, $http,$ionicHistory) {

$scope.urlimg = "http://placehold.it/350x230";
$scope.urlimg2 = "http://placehold.it/350x230";
$scope.urlimg3 = "http://placehold.it/350x230";
$scope.dor = {};

 $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
$scope.test222 = function() {

  for (var i = 0; i < $scope.devList.length; i++) {
     var check_box = $scope.devList[i];
      console.log("Name: "+check_box.text+" status: "+check_box.checked );
    };

  // string to boolean
  // if(true==JSON.parse("true")){
  //   console.log("asdfasfasdfasdffff");
  // }

  };

$scope.url_domain = MyDomain.get();

  $scope.no_sus = "https://maxcdn.icons8.com/Android_L/PNG/36/City/no_animals-36.png";
  $scope.wifi = "https://maxcdn.icons8.com/Android_L/PNG/36/Network/WiFi_logo-36.png";
  $scope.tv = "https://maxcdn.icons8.com/Android_L/PNG/36/Household/tv-36.png";
  $scope.no_smk = "https://maxcdn.icons8.com/Android_L/PNG/36/City/no_smoking-36.png";
  $scope.fan = "https://maxcdn.icons8.com/Android_L/PNG/36/Household/fan-36.png";
  $scope.air = "https://maxcdn.icons8.com/windows8/PNG/32/Household/air_conditioner-32.png";
  $scope.wash = "https://maxcdn.icons8.com/Android_L/PNG/36/Household/washing_machine-36.png";
  $scope.pk = "https://maxcdn.icons8.com/Android_L/PNG/36/Household/garage-36.png";


  $scope.devList = [
    { text: "Not allow pet", checked: true, img: "https://maxcdn.icons8.com/Android_L/PNG/36/City/no_animals-36.png"},
    { text: "Free Wifi", checked: false, img: "https://maxcdn.icons8.com/Android_L/PNG/36/Network/WiFi_logo-36.png" },
    { text: "TV", checked: false, img: "https://maxcdn.icons8.com/Android_L/PNG/36/Household/tv-36.png" },
    { text: "No Smoking", checked: false, img: "https://maxcdn.icons8.com/Android_L/PNG/36/City/no_smoking-36.png" },
    { text: "Fan", checked: false, img: "https://maxcdn.icons8.com/Android_L/PNG/36/Household/fan-36.png" },
    { text: "Air Conditioner", checked: false, img: "https://maxcdn.icons8.com/windows8/PNG/32/Household/air_conditioner-32.png" },
    { text: "Washing Machine", checked: false, img: "https://maxcdn.icons8.com/Android_L/PNG/36/Household/garage-36.png" }
  ];


  $scope.cho_img = function (qut) {

    var options = {
      quality: qut,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
       allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 3500,
      targetHeight: 2300
      ,
      popoverOptions: CameraPopoverOptions
      // saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      // alert(imageData);
      var image = document.getElementById('myImage');
      //$scope.imgolo = imageData;
     // var ss1 = imageData.substr(0, imageData.lastIndexOf('?') );
      $scope.imgolo = imageData;
      var res = imageData;
 var url = "http://"+$scope.url_domain+"/file/upload/upload.php";
     var ss1 = res.substr(0, res.lastIndexOf('?') );
     var targetPath = ss1;
     console.log(ss1);
    $scope.imgolo =  targetPath ;
     var name = res.substr(res.lastIndexOf('/') + 1);
     var ss2 = name.substr(0, name.lastIndexOf('?') );
     var xx = Math.floor((Math.random() * 100000) + 1);
     var filename = xx+""+ss2;
     console.log(filename);

     var options = {
          fileKey: "file",
          fileName: filename,
          chunkedMode: false,
          mimeType: "image/jpg",
          params : {'directory':'upload', 'fileName':filename ,'url_domain':$scope.url_domain}
      };

      $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {

          console.log(result.response);

          if(qut===70){
            $scope.urlimg = "http://"+$scope.url_domain+""+result.response;
            $scope.img4up1 = result.response;
          }else if(qut===72){
            $scope.urlimg2 = "http://"+$scope.url_domain+""+result.response;
            $scope.img4up2 = result.response;
          }else if(qut===73){
            $scope.urlimg3 = "http://"+$scope.url_domain+""+result.response;
            $scope.img4up3 = result.response;
          };



        console.log("aaaa "+$scope.urlimg);
          //console.log("SUCCESS: " + JSON.stringify(result.response));
      }, function (err) {
          console.log("ERROR: " + JSON.stringify(err));
      }, function (progress) {

          // PROGRESS HANDLING GOES HERE
      });



      //image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
}

$scope.forhide = true;

var geocoder = new google.maps.Geocoder();
// $scope.dor = [];

// $scope.f_create_olo  = function( ) {
// $ionicHistory.goBack();
// };


$scope.f_create_olo  = function( ) {

  console.log("scope "+$scope.dor.lat+","+$scope.dor.lng);


}

$scope.create_dor  = function(res) {

// console.log("name "+res.name_dor+" prize "+res.prize_dor+" lat "+res.lat+" lng "+res.lng+"");
// console.log(" elec "+res.prize_e_dor+" water "+res.prize_w_dor+"bking"+res.prize_b_dor+"type"+res.gender+"");

res.user_id =  window.localStorage['uid'];

if(res.gender=="all"){
  res.men = true;
  res.women = true;
}else if (res.gender=="men") {
res.men = true;
res.women = false;
}else if (res.gender=="women") {
res.men = false;
res.women = true;
};

// if(false==0){
// console.log("sdd");
// }

console.log("user id"+res.user_id+"name "+res.name_dor+" prize "+res.prize_dor+" lat "+res.lat+" lng "+res.lng+"");
console.log(" elec "+res.prize_e_dor+" water "+res.prize_w_dor+"bking"+res.prize_b_dor);
console.log(" tel "+res.tel+" mail "+res.mail+"ig"+res.ig+"fb"+res.fb+"line"+res.line);
console.log("type",res.men,res.women)

  for (var i = 0; i < $scope.devList.length; i++) {
     var check_box = $scope.devList[i];
       // console.log("Name: "+check_box.text+" status: "+check_box.checked );
       // console.log("$scope.devList["+i+"].checked",$scope.devList[i].checked);
    };

  res.pet = $scope.devList[0].checked;
  res.wifi = $scope.devList[1].checked;
  res.tv = $scope.devList[2].checked;
  res.no_smk = $scope.devList[3].checked;
  res.fan = $scope.devList[4].checked;
  res.air = $scope.devList[5].checked;
  res.wash = $scope.devList[6].checked;
console.log(res.pet,res.wifi,res.tv,res.no_smk,res.fan,res.air,res.wash)

  res.img1 = $scope.img4up1;
  res.img2 = $scope.img4up2;
  res.img3 = $scope.img4up3;


 console.log("res.img1",res.img1,"res.img2",res.img2,"res.img3",res.img3);

// console.log("no_sus "+res.not_allow+" wifi "+res.wifi+" tv "+res.tv+" no_smk "+res.no_smk+" fan "+res.fan+" air "+res.air+" wash "+res.wash);


    $http.post("http://"+$scope.url_domain+"/angularjs/insert_dorV2.php", res ).success(function(data,status,headers,config){
          console.log("data insert success");

        });

   $ionicHistory.goBack();

  };


function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function(responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    } else {
      updateMarkerAddress('Cannot determine address at this location.');
    }
  });

console.log(pos);

$scope.dor.lat = pos[Object.keys(pos)[Object.keys(pos).length - 2]];
$scope.dor.lng = pos[Object.keys(pos)[Object.keys(pos).length - 1]];

console.log("scope "+$scope.dor.lat+","+$scope.dor.lng);
}

function updateMarkerStatus(str) {
  document.getElementById('markerStatus').innerHTML = str;
}


function updateMarkerPosition(latLng) {
  document.getElementById('info').innerHTML = [
    latLng.lat(),
    latLng.lng()

  ].join(', ');
}

function updateMarkerAddress(str) {
  document.getElementById('address').innerHTML = str;
}


function initialize() {

console.log(" in initialize");


  var latLng = new google.maps.LatLng(-34.397, 150.644);

  var map = new google.maps.Map(document.getElementById('mapCanvas'), {
    zoom: 14,
    center: latLng,
    mapTypeControl: true
  });

  var horizon = [];
var pos = [];

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      horizon = [pos.lat,pos.lng];
      // console.log("horizon"+horizon);
      console.log("first",pos.lat+" "+pos.lng);

          map.setCenter(pos);
var NEW_latLng = new google.maps.LatLng(pos.lat,pos.lng);
          var marker = new google.maps.Marker({
    position: NEW_latLng,
    map: map,
    draggable: true
  });


// console.log(latLng);
// console.log("NEW_latLng",NEW_latLng);


  // Update current position info.
  // updateMarkerPosition(NEW_latLng);
  // geocodePosition(NEW_latLng);
  console.log("geocodePosition"+NEW_latLng);

  // Add dragging event listeners.
  google.maps.event.addListener(marker, 'dragstart', function() {
    updateMarkerAddress('Dragging...');
  });

  google.maps.event.addListener(marker, 'drag', function() {
    updateMarkerStatus('Dragging...');
    updateMarkerPosition(marker.getPosition());
    var lat = this.getPosition().lat();
    var lng = this.getPosition().lng();
    console.log("Dragging marker",lat,lng);
  });

  google.maps.event.addListener(marker, 'dragend', function() {
    updateMarkerStatus('Drag ended');
    // console.log("marker.getPosition()",marker.getPosition());
    // console.log("marker",marker.getPosition().lat,marker.getPosition().lng);
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    var pos = { lat : lat , lng : lng };
    geocodePosition(pos);
  });

  });
}

// Onload handler to fire off the app.
initialize();

// google.maps.event.addDomListener(window, 'load', initialize);




})

.controller('ManageCtrl', function($scope, Chats,$ionicPopover,$state, $ionicActionSheet,MyDomain,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.url_domain = MyDomain.get();
  $scope.uid = window.localStorage['uid'];
  $scope.test = function(){

  console.log("click ok");

}

       $http.get("http://"+$scope.url_domain+"/angularjs/get_data_dor_byuserid.php?uid="+$scope.uid+"")
    .success(function (response,status, headers, config) {
        $scope.json_res = response;
        console.log($scope.json_res);
      }).catch(function(data, status, headers, config){
        data.statusText; //contains the error message
    });



  
  $scope.showActionsheet = function() {
    
    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };

$scope.add_dor = function() {

    $state.go('create_dormitory',{});

  }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.positions = ['tl', 'tr', 'br', 'bl'];

  $scope.effects = [{
    name: 'Choose an effect here',
  },{
    value: 'slidein',
    name: 'Slide in + fade'
  },{
    value: 'zoomin',
    name: 'Zoom in'
  },{
    value: 'fountain',
    name: 'Fountain'
  }];

  $scope.buttons = [{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  },{
    label: 'a link',
    icon: 'ion-paper-airplane'
  }];

  $scope.chosenEffect = 'zoomin';


  $ionicPopover.fromTemplateUrl('/templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
$scope.closePopover = function() {
  $state.go('profile', {id: 14});
    $scope.popover.hide();
  };



})


.controller('tabCtrl', function($scope, $stateParams, Chats,$check_login_service) {

          
 // $scope.mainCtrl.showFeature = false;

            // var c_uid = window.localStorage['uid']
          $scope.show_tab = function(){
            if($check_login_service.get_status()){
             return true;
            }else{
              return false;
            }
}
           //  console.log(c_uid);
           // // if(c_uid!="0"){ $scope.tab_m_status = true; } else{ $scope.tab_m_status = false; };
           // // console.log($scope.tab_m_status);
           // $scope.tab_m_status = true;
})



.controller('BookmarkCtrl', function($scope,$localstorage,$http,MyDomain,$state,$check_login_service) {
$scope.url_domain = MyDomain.get();
$scope.user_id = $localstorage.getObject('uid');
$scope.check_login = function(){
var uid = $localstorage.getObject('uid');
if(uid==0){
  return false;
}else{
  return true;
}
}

if($scope.check_login()){

  $scope.name_fav = "Favorite_form_db";
  $scope.name_bk = "Booking_form_db";

          $http.get("http://"+$scope.url_domain+"/angularjs/get_favor_byid.php?text="+$scope.user_id)
    .success(function (data,status, headers, config) {
                $scope.json_res1 = data;
                $scope.array_fav = [];

            for (var i = $scope.json_res1.length - 1; i >= 0; i--) {
              // console.log($scope.json_data[i].dor_id);
              $scope.array_fav.push($scope.json_res1[i].dor_id);
            }

            $localstorage.setObject('Favorite_form_db',$scope.array_fav);

            }).catch(function(data, status, headers, config){ // <--- catch instead error

        data.statusText; //contains the error message

    });

 $http.get("http://"+$scope.url_domain+"/angularjs/get_booking_byid.php?text="+$scope.user_id)
    .success(function (response,status, headers, config) {
          $scope.json_res2 = response;
          // console.log( $scope.json_res2);
          $scope.array_book = [];
          for (var i = $scope.json_res2.length - 1; i >= 0; i--) {
              // console.log($scope.json_data[i].dor_id);
              $scope.array_book.push($scope.json_res2[i].dor_id);
            }
            
            $localstorage.setObject('Booking_form_db',$scope.array_book);


      }).catch(function(data, status, headers, config){ // <--- catch instead error

        data.statusText; //contains the error message

    });
}else{
    $scope.name_fav = "Favorite";
  $scope.name_bk = "Booking";
}

console.log($scope.name_fav,$scope.name_bk);




$scope.whatthefilter = function(input){
// console.log(input);
  var datas_booking = $localstorage.getObject('Booking');

// console.log("datas",datas);
 

    var out = [];

    angular.forEach(input, function(language) {


angular.forEach(datas_booking, function(value, key) {

  if (language.dor_id == value) {
    // console.log(language.dor_id);
        out.push(language)
      }
})
      
    })

    // console.log(out);

    return out;
  

}

$scope.filter_fav = function(input){
// console.log(input);
  var datas_fav = $localstorage.getObject('Favorite');
// console.log("datas",datas);
 

    var out = [];

    angular.forEach(input, function(language) {


angular.forEach(datas_fav, function(value, key) {

  if (language.dor_id == value) {
    // console.log(language.dor_id);
        out.push(language)
      }
})
      
    })

    // console.log(out);

    return out;
  

}


$scope.getData = function(){
$scope.url_domain = MyDomain.get();
// "http://"+$scope.url_domain+"/angularjs/get_data_byid.php?text=all"
           $http.get("http://"+$scope.url_domain+"/angularjs/get_data_byid.php?text=all")
    .success(function (response,status, headers, config) {
        $scope.json_res = response;
        $scope.json_new = $scope.whatthefilter($scope.json_res);
        $scope.json_fav = $scope.filter_fav($scope.json_res);
        if($check_login_service.get_status()){
          // console.log("dasddd");
          // http://localhost
    //       $http.get("http://"+$scope.url_domain+"/angularjs/get_favor_byid.php?text="+$scope.user_id+"")
    // .success(function (data,status, headers, config) {
    //             $scope.json_data = data;
    //         $scope.array_fav = [];
    //         for (var i = $scope.json_data.length - 1; i >= 0; i--) {
    //           // console.log($scope.json_data[i].dor_id);
    //           $scope.array_fav.push($scope.json_data[i].dor_id);
    //         }
    //         $localstorage.setObject('Favorite',$scope.array_fav);
    //         // console.log($scope.json_data);
    //     // angular.forEach($scope.json_data, function(value, key) {

    //     //           $scope.array_fav.push(value[key])
                
    //     //   })

    //       // console.log("$scope.array_fav",$scope.array_fav);

    //   }).error(function(status, headers, config) {

    //       console.log("dddddd"+status);
    //       console.log(headers);
    //       console.log(config);
    //   });

        }else{
          // console.log("xxxxx");
        }

         }).error(function(status, headers, config) {

          console.log("dddddd"+status);
          console.log(headers);
          console.log(config);
      });
}
$scope.getData();

// $scope.getData();
// setInterval($scope.getData, 1000);

// $scope.json_new = $scope.whatthefilter($scope.json_res);



// if (localStorage.getItem("Favorite") === null) {
//   $localstorage.setObject('Favorite',[]);
// }

// if (localStorage.getItem("Booking") === null) {
//   $localstorage.setObject('Booking',[]);
// }

// $scope.datas = $localstorage.getObject('Favorite');
// $scope.datas_fav = $localstorage.getObject('Favorite');
// console.log("$scope.datas",$scope.datas);
// if($scope.datas==null){
//   $localstorage.setObject('Favorite',[]);
// }

  $scope.remove_booking = function(item) { 
    console.log('item',item);
    $scope.datas_book = $localstorage.getObject('Booking');
    var out = [];

    angular.forEach($scope.datas_book, function(value, key) {
console.log(value, key); 
  if (value == item) {
    // console.log("item == value");        
    //   }else{
    //     out.push(item)
    console.log("in if"); 
      }else{
        console.log("in else");
         out.push($scope.datas_book[key])
      }
      console.log('out',out);
})

    $localstorage.setObject('Booking',out);

}


  $scope.remove = function(item) { 
    console.log('item',item);
    $scope.datas_book = $localstorage.getObject('Favorite');
    var out = [];

    angular.forEach($scope.datas_book, function(value, key) {
console.log(value, key); 
  if (value == item) {
    // console.log("item == value");        
    //   }else{
    //     out.push(item)
    console.log("in if"); 
      }else{
        console.log("in else");
         out.push($scope.datas_book[key])
      }
      console.log('out',out);
})

    $localstorage.setObject('Favorite',out);
}

  $scope.addFavorite = function(data) { 
  // var index = $scope.datas.indexOf(item);
  $scope.datas = $localstorage.getObject('Favorite');
  $scope.datas.push(data); 
  $localstorage.setObject('Favorite',$scope.datas);    
  $scope.datas = $localstorage.getObject('Favorite');
}


  $scope.addBooking = function(data) { 
  // var index = $scope.datas.indexOf(item);
  $scope.datas = $localstorage.getObject('Booking');
  $scope.datas.push(data); 
  $localstorage.setObject('Booking',$scope.datas);    
  $scope.datas = $localstorage.getObject('Booking');
}





$scope.click = function(id) {
    console.log(id);
    $state.go('profile', {id: id});
    // alert(JSON.stringify(id));
  }

$scope.byBooking = function( ){

return function( item ) {

  return (item.dor_id === "14");


    
  }

}



$scope.byFavorite = function(fieldName){


}


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,MyDomain,$http,$localstorage,$check_login_service, $ionicModal, $timeout) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.url_domain = MyDomain.get();
 $scope.email = $localstorage.get('email');
 console.log(" $scope.email",$scope.email);

$scope.value_status = $check_login_service.get_status();

// console.log("$scope.value_status",$scope.value_status);

         $scope.show_tab = function(){
            if($check_login_service.get_status()){
             return true;
            }else{
              return false;
            }
          }

   $ionicModal.fromTemplateUrl('templates/SignUp.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    console.log("asdasd");
  }).catch(function(data, status, headers, config){
        data.statusText; //contains the error message
    });

  $scope.closeSignUp = function() {
    $scope.modal.hide();
  };

   $scope.openSignUp = function() {
    console.log("go create user");
    $scope.modal.show();
  };


 $scope.createuser = function(user) {
    console.log(" createuser "+user.email+" , "+user.pwd);

    // $http.post("http://localhost/angularjs/insert.php", user ).success(function(data,status,headers,config){
    //       console.log("data insert success");
    //     });

    $http.post("http://"+$scope.url_domain+"/angularjs/insert.php", user ).success(function(data,status,headers,config){
          console.log("data insert success");
        });

  };


  $ionicModal.fromTemplateUrl('templates/forget_pass.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.closeforget = function() {
    $scope.modal2.hide();
  };
  
  $scope.open_forget = function() {
    $scope.modal2.show();
  };

  $scope.check_email_forget = function(email) {
    console.log(" email "+email);
    var x = "";

    var y = $http.post("http://"+$scope.url_domain+"/angularjs/check_email.php", email ).success(function(data,status,headers,config){
          // console.log(data);
          x = data;
          // console.log(" num row in post "+x);
        }).then(function( val ) {

  $scope.val = val.data;
  if($scope.val==1){

    console.log("success");

    $http.post("http://"+$scope.url_domain+"/gmail/sendmail.php", email ).success(function(data,status,headers,config){
      console.log("data insert success");
    });


  }

});

}
  
  
  // var directTransport = require('');

  $scope.sendmail_forget = function(email) {
    // console.log("go create user");

    $http.post("http://"+$scope.url_domain+"/gmail/sendmail.php", email ).success(function(data,status,headers,config){
      console.log("data insert success");
    }).catch(function(data, status, headers, config){
        data.statusText; //contains the error message
    });


  }



var c_uid = window.localStorage['uid']

        if(c_uid!="0"){

                $scope.status_login = false;
            }else{
              $scope.status_login = true;
            }

// switch (c_uid) {
//   case (c_uid !== 0):
//     console.log("cdfdsfa0");
//     break;
//   case (c_uid == 0):
//     console.log("csddddddddd");
//     break;
//   }



      $scope.logout = function(){

        window.localStorage['uid'] = 0;
        window.localStorage['email'] = "";
        $scope.status_login = true;
        $scope.showtab = false;
        // $localstorage.setObject('Favorite',[]);
        // $localstorage.setObject('Booking',[]);
// window.localStorage[] = [];
$scope.value_status = $check_login_service.get_status();

      }

      $scope.submit_login = function(user) {

         

var link = "http://"+$scope.url_domain+"/angularjs/check_login.php";
    console.log(" login "+user.email+" , "+user.pwd,link);

    // var link = 'http://localhost/angularjs/check_login.php';

        console.log("user",user);


        $http.post(link, user).then(function (res){
            var uid = res.data;

           // sessionService.set('uid',uid);
            window.localStorage['uid'] = uid;
            var c_uid = window.localStorage['uid']
            var t_u = typeof c_uid;
            console.log(c_uid+" "+t_u);

            //sessionService.set('email',user.email);
             window.localStorage['email'] = user.email;
            var c_uid = window.localStorage['email']
            console.log(c_uid);
            // console.log(uid);

            $scope.email = user.email;

            // var getvar = sessionService.get('uid');
            // console.log("sessionStorage"+getvar);

            if(uid!="0"){

               // $ionicHistory.nextViewOptions({
               //      historyRoot: true
               //  });
               // $scope.mainCtrl.showFeature = true;
               // $scope.show_tab();
                $scope.showtab = true;
                $scope.status_login = false;
                $scope.value_status = $check_login_service.get_status();


            }

        });



  };

});



