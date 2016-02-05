(function() {
    'use strict';
    
    angular.module('app').directive('customAllow', function() {
        function link(scope, element, attrs) {
            element.bind("keydown", function(event) {
                if (((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 8 ||
                    event.keyCode <= 37 || event.keyCode <= 39 || (event.keyCode >= 96 && event.keyCode <= 105))) {
                    return true;
                }
                return false;
                
               // the code above could of been a one liner 
               
                /*
                   return ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 8 || event.keyCode <= 37 || event.keyCode <= 39 || (event.keyCode >= 96 && event.keyCode <= 105))
                */
            });
        };

        return {
            link: link
        }
    });
})();
