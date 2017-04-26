/**
 * Created by armin on 06.04.16.
 */

(function () {
    'use strict';

    angular
        .module('quest')
        .factory('QuestService', QuestService);

    QuestService.$inject = ["$log", "$mdDialog"];

    /* @ngInject */
    function QuestService($log, $mdDialog) {
        $log = $log.getInstance("Quest", debugging);

        var service = {
            openQuestDialog: openQuestDialog
        };
        return service;

        ////////////////


        function openQuestDialog(quest, edit, evt) {
            return $mdDialog.show({
                templateUrl: 'js/app/quest/quest.tpl.html',
                controller: 'QuestController',
                controllerAs: 'quest',
                bindToController: true,
                targetEvent: evt,
                locals: {
                    quest: quest,
                    edit: edit
                }
            });
        }
    }

})();

