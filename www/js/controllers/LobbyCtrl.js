angular.module('starter.controllers')

.controller('LobbyCtrl', ['$scope', 'TKTestQuestionService', 'TKAnswersService', '$state','$window','SSFUsersRest'
,function($scope, TKTestQuestionService, TKAnswersService, $state,$window,SSFUsersRest) {

      TKTestQuestionService.all();

      $scope.logOut=function(){
         SSFUsersRest.logOut();
         $window.localStorage.token="";
         $window.localStorage.userId="";
         $state.go('landing'); 
      };

      $scope.goToTest = function() {
         TKAnswersService.resetAnswers();
         $state.go('question', {
            questionID: 1
         });
      
      };

   }
]);