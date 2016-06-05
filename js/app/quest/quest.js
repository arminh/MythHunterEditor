/**
 * Created by armin on 29.12.15.
 */
(function() {
    'use strict'

    angular
        .module("quest", [])
        .config(config);

    config.$inject = ["$provide"];

    function config($provide) {
        /*    $provide.decorator('taOptions', ['taRegisterTool', 'taSelection', '$delegate', function(taRegisterTool, taSelection, taOptions) { // $delegate is the taOptions we are decorating
         taOptions.toolbar = [
         ['h1', 'h2', 'h3', 'p'],
         ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
         ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
         ['insertImage', 'insertLink', 'insertVideo']
         ];
         }]);*/
    }
})();
