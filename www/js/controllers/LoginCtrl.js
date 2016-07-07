angular.module('starter.controllers')
    .controller('LoginCtrl', ['$scope', 'SSFUsersRest', '$state','$window', function($scope, SSFUsersRest, $state, $window) {

        $scope.user = {};
        
        $scope.signIn = function(form) {
        SSFUsersRest.display($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        $window.localStorage.token=response.data.id;
                        $window.localStorage.userId=response.data.userId;
                        $scope.user = {};

                        $state.go("lobby");


                    }}, function(err) {
                       if(err.status == 404){
                           alert("why are you here?");
                       }else {
                           alert("Email doesnt exist!");
                       }

            

            
        });   
        };
        
    }]);
