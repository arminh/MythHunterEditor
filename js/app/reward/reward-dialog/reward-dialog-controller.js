/**
 * Created by Hannah on 14.05.2017.
 */

(function () {
    'use strict';

    angular
        .module('reward')
        .controller('RewardDialogController', RewardDialogController);

    RewardDialogController.$inject = ["$mdDialog", "user", "REWARD_MAX_CARDS"];

    /* @ngInject */
    function RewardDialogController($mdDialog, user, REWARD_MAX_CARDS) {
        var vm = this;
        vm.user = user;
        vm.maxCards = REWARD_MAX_CARDS;

        vm.confirm = confirm;
        vm.cancel = cancel;

        activate();

        ////////////////

        function activate() {
        }

        function confirm() {
            $mdDialog.hide({
                rewards: vm.rewardIds
            });
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();

