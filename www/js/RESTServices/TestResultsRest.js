angular.module("RESTServices")
.service('TestResultsRest',['$http',function($http){
    var TestResultsRest=this;
    var apiUrl="https://tktest-oscar521.c9users.io/api/TestResults";
    TestResultsRest.save=function(test){
        return $http({
            url:apiUrl,
            method:'POST',
            data:test
            
        })}
    TestResultsRest.display=function(){
        return $http({
            url:apiUrl,
            method:'GET'
        });
    };
}]);