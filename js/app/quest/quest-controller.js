/**
 * Created by armin on 29.12.15.
 */

gaptext.controller("gaptextController", ["$scope", function($scope) {

    var checkboxCounter = 0;

    var quizGroups = {};

    $scope.htmlVariable;

    $scope.$on("saveQuest", function() {
        console.log("Hallo");
    });


    $scope.saveQuest = function() {
        var temp = $("#quest").find("[id^='taTextElement']");

        var checkboxes = $(temp).find("input[type='checkbox']");

        for(var i = 0; i < checkboxes.length; i++) {
            if(!quizGroups[checkboxes[i].name]) {
                quizGroups[checkboxes[i].name] = [];
            }

            quizGroups[checkboxes[i].name].push(checkboxes[i].checked);
        }

        var radios = $(temp).find("input[type='radio']");

        for(var i = 0; i < radios.length; i++) {
            if(!quizGroups[radios[i].name]) {
                quizGroups[radios[i].name] = [];
            }

            quizGroups[radios[i].name].push(checkboxes[i].checked);
        }

        console.log(quizGroups);
    };
}]);