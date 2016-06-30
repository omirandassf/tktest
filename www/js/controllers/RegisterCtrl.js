angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', 'SSFUsersRest', '$state', function($scope, SSFUsersRest, $state) {

        $scope.user = {};
        $scope.signupForm = function(form) {
            $scope.signupForm = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }

                SSFUsersRest.post($scope.user).then(function(response) {
                    // handle different responses and decide what happens next
                    if (response.status == 200) {
                        $state.go("lobby");
                        console.log(response);
                    
                }}, function(err) {
                    if (err.status == 422) {
                        alert("Email already registered!");
                    }else if (err.status == 404) {
                        alert("Server not found");
                    }else if (err.status == 500) {
                        alert("The world has ended, or the server just isn’t online");
                    }
                    alert("You have some problem with the Internet");
                    return err;
                });



            };
        };



    }]);