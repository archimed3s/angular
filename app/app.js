(function() {
    'use strict';

    angular.module('todoApp', []);

    angular
        .element(document)
        .ready(function() {
            angular.bootstrap(document, ['todoApp']);
        });
})();