/**
 * Created by armin on 29.12.15.
 */

taskEditor.controller("taskeditorController", ["$scope", function($scope) {

    $scope.htmlVariable;


  /*  $scope.saveQuest = function() {
        $scope.quest = "";
        $scope.quest += "<html><head></head><body>";
        $scope.quest += "<div id='task-title'>" + questtitle + "</div>";
        $scope.quest += "<div id='task-title'>" + questtitle + "</div>";
        $scope.quest += "<div id='content'>";

        questContent = $.parseHTML($scope.htmlVariable);
        console.log(questContent);

        for(var i=0; i < questContent.length; i++) {

            if($(questContent[i]).empty()) {
                questContent.splice(i, 1);
            } else {
                console.log(questContent[i]);
            }
        }


        var temp = $("#task").find("[id^='taTextElement']");

        var checkboxes = $(temp).find("input[type='checkbox']");

        for(var i = 0; i < checkboxes.length; i++) {

            checkboxes[i].attr("checked", checkboxes[i].checked);

            if(!quizGroups[checkboxes[i].name]) {
                quizGroups[checkboxes[i].name] = [];
            }

            quizGroups[checkboxes[i].name].push(checkboxes[i].checked);
        }

        var radios = $(temp).find("input[type='radio']");

        for(var i = 0; i < radios.length; i++) {
            radios[i].attr("checked", radios[i].checked);

            if(!quizGroups[radios[i].name]) {
                quizGroups[radios[i].name] = [];
            }

            quizGroups[radios[i].name].push(checkboxes[i].checked);
        }

        console.log(quizGroups);
    };*/
}]);