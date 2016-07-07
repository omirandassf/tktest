angular.module("RESTServices")
    .service('TestResultsRest', ['$http','$window', function($http,$window) {
        var TestResultsRest = this;
        var apiUrl = "https://tktest-oscar521.c9users.io/api/TestResults";
        TestResultsRest.save = function(test) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: test,
                headers:{
                    'Authorization':$window.localStorage.token
                }

            });
        };
        TestResultsRest.display = function(token, userId) {
            return $http({
                url: apiUrl + "?filter[where][userID]=" + userId,
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });
        };
    }]);