angular.module("RESTServices", [])
    .service('SSFUsersRest', ['$http','$window', function($http,$window) {
        var SSFUsersRest = this;
        var apiUrl = "https://tktest-oscar521.c9users.io/api/SSFUsers";
        SSFUsersRest.post = function(newUserData) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: newUserData
            });
            
        };
        SSFUsersRest.display=function(data){
            return $http({
                url:apiUrl+"/login",
                method: 'POST',
                data:data
            });
        };
        
        SSFUsersRest.logOut=function(){
            return $http({
                url:apiUrl+"/logout",
                method: 'POST',
                 headers:{
                    'Authorization':$window.localStorage.token
                }
            });
        };

    }]);