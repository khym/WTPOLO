          $http.get("http://"+$scope.url_domain+"/angularjs/get_favor_byid.php?text="+$scope.user_id)
    .success(function (data,status, headers, config) {
                $scope.json_res = data;
                $scope.array_fav = [];

            for (var i = $scope.json_res.length - 1; i >= 0; i--) {
              // console.log($scope.json_data[i].dor_id);
              $scope.array_fav.push($scope.json_res[i].dor_id);
            }

            $localstorage.setObject('Favorite',$scope.array_fav);

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
            
            $localstorage.setObject('Booking',$scope.array_book);


      }).catch(function(data, status, headers, config){ // <--- catch instead error

        data.statusText; //contains the error message

    });