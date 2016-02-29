angular.module('starter.services', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.factory('$check_login_service', ['$localstorage', function($localstorage) {
  return {
    get_status: function( ) {
        
          
          if($localstorage.getObject('uid')==0){
          return false;
          }else{
          return true;
          }

    }
  }
}])

.filter('filterMultiple',['$filter',function ($filter) {
 
  return function (items, keyObj) {
    // console.log("items, keyObj",items, keyObj);
     var x = 0;
    var filterObj = {

              data:items,
              filteredData:[],

                applyFilter : function(obj,key){
                  // console.log("obj,key",obj,key);

                  var fData = [];
                  if(x == 0)
                    this.filteredData = this.data;
                    x = 2;

                  if(obj){

                    var fObj = {};

                      if(!angular.isArray(obj)){
                        fObj[key] = obj;
                        fData = fData.concat($filter('filter')(this.filteredData,fObj));

                      }else if(angular.isArray(obj)){

                          if(obj.length > 0){ 
                            for(var i=0;i<obj.length;i++){
                              if(angular.isDefined(obj[i])){
                                fObj[key] = obj[i];
                                fData = fData.concat($filter('filter')(this.filteredData,fObj));  
                              }
                            }
                          
                        }                   
                      }  //end else if

                    if(fData.length > 0)
                      {
                        this.filteredData = fData;
                      }

                  } //end if(obj)

                } //end applyFilter : function

        }; // end var filterObj
// console.log(filterObj);
    if(keyObj){
      angular.forEach(keyObj,function(obj,key){
        filterObj.applyFilter(obj,key);
      });     
    }
    
    return filterObj.filteredData;
  }

}])

.factory('MyDomain', function() {
  return {
      get:function(){
        // return '127.0.0.1';
        return  '192.168.231.1';
      }
    }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
