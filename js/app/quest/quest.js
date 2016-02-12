/**
 * Created by armin on 29.12.15.
 */
var quest = angular.module("quest", []);

quest.directive('questEditor', function() {
    console.log("task directive");
    return {
        restrict: 'E',
        scope: {
            content: "="
        },
        templateUrl: 'js/app/task/taskeditor.tpl.html',
        controller: "taskeditorController"
    };
});

quest.config(function($provide) {
/*    $provide.decorator('taOptions', ['taRegisterTool', 'taSelection', '$delegate', function(taRegisterTool, taSelection, taOptions) { // $delegate is the taOptions we are decorating
        taOptions.toolbar = [
            ['h1', 'h2', 'h3', 'p'],
            ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
            ['insertImage', 'insertLink', 'insertVideo']
        ];
    }]);*/
});
