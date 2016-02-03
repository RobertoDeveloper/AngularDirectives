
//Attach directive to iframe element, add the attribute refreshframe to flag the directive whenever you want to reset the src attribute of the iframe

(function () {
    'use strict';

    angular.module('app').directive('refreshiframe', [function () {

        function link($scope, $element, $attr) {
                
            setUpWatch();

            function setUpWatch() {
                $scope.$watch('refreshframe', function (newValue, oldValue) {
                    if (newValue) {
                        $element.attr('src', $element.attr('src'));
                        //this tells the directive not to reset the src attribute again on the iframe input element
                        $scope.refreshframe = false;
                    }
                });
            }
        }

        return {
            link: link,
            restrict: 'A',
            scope: {
                refreshframe: '='
            }
        }
    }]);
})();