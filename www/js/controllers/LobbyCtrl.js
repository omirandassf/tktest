angular.module('starter.controllers', ['TKTestAnswers'])

.controller('LobbyCtrl',['$scope', 'TKTestQuestionService','$state'

function($scope, TKTestQuestionService) {
TKTestQuestionService.all();
}]);

$scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };