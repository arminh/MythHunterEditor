/**
 * Created by armin on 19.01.16.
 */

map.controller("TaskController", function($scope, $modalInstance, textAngularManager, MarkerType, HtmlTools, task) {
    $scope.types = MarkerType;

    $scope.name = task.name;
    $scope.description = task.description;
    $scope.content = HtmlTools.retrieveContent(task.html.content);
    $scope.activeType = task.type;

    var questName = task.questName;

    $scope.answers = task.html.answers;
    angular.forEach(task.html.answers, function(val, key) {
        if(val == true) {
            $scope.content = $scope.content.replace('id="' + key + '"', 'id="' + key + '"  checked');
        }
    });

    $scope.error = false;


    $scope.markerBtnStyle = {
        "width": (100 / Object.keys($scope.types).length / 2) + '%',
        "display": "inline-block",
        "vertical-align": "top"
    };

    $scope.markerSelected = function(type, index) {
        $scope.activeType = type;
        $scope.selectedIndex = index;
    };

    $scope.getMarkerIconSrc = function(type) {
        return task.getMarkerSrc(type)
    };

    $scope.contentChanged = function() {
        setStates();
    };

    $scope.ok = function() {
        $scope.content = $scope.content.replace(" checked","");
        if(!$scope.activeType) {
            $scope.error = true;
        } else {
            HtmlTools.encloseContent(questName, $scope.name, $scope.content).then(function(result) {
                $modalInstance.close({
                    type: $scope.activeType,
                    name: $scope.name,
                    description: $scope.description,
                    content: result,
                    answers: $scope.answers
                });
            });
        }
    };

    function setStates() {
        $scope.answers = {};
        var textAngular = $("text-angular");
        var inputElements = textAngular.find("input");
        for(var i = 0; i < inputElements.length; i++) {
            if(inputElements[i].id != "") {
                $scope.answers[inputElements[i].id] = inputElements[i].checked;
            }
        }

    }

    $scope.close = function() {
        $modalInstance.dismiss('cancel')
    };
});