/**
 * Created by armin on 29.03.16.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ["$provide"];

    /* @ngInject */
    function config($provide) {
        $provide.decorator('$log', decorateLogs);

        decorateLogs.$inject = ["$delegate"];

        function decorateLogs($delegate) {
            $delegate.getInstance = getInstance;

            return $delegate;

            function getInstance(classname, debugging) {
                return {
                    log: decorateLog($delegate.log, classname, debugging),
                    debug: decorateLog($delegate.debug, classname, debugging),
                    info: decorateLog($delegate.info, classname, debugging),
                    warn: decorateLog($delegate.warn, classname, debugging),
                    error: decorateLog($delegate.error, classname, debugging)
                }
            }

            function decorateLog($log, classname, debugging) {
                var temp = $log;

                $log = function () {
                    var args = [].slice.call(arguments);
                    args[0] = classname + "::" + args[0];
                    if(!debugging) {   //debug true/false
                        args[1] = angular.toJson(args[1], true); //Stringify object/array
                    }

                    // Send on our enhanced message to the original debug method.
                    temp.apply(null, args)
                };

                return $log;
            }
        }




    }
})();