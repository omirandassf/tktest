angular.module('starter.controllers')

.controller('HistoryCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService',
    function($scope, $window, $state, tests, TKAnswersService) {

        $scope.tests = tests === undefined ? [] : tests;

        $scope.goToResult = function(test) {
            var answers = {
                "Competing": test.competing,
                "Collaborating": test.collaborating,
                "Compromising": test.compromising,
                "Avoiding": test.avoiding,
                "Accommodating": test.accommodating
            };
            TKAnswersService.setAnswers(answers);
            $state.go('results');
        };
    }
]);