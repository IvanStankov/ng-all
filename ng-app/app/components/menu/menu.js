angular.module('miscApp')
    .component('topMenu', {
        transclude: true,
        template: `
            <nav>
                Main menu
                <ng-transclude></ng-transclude>
            </nav>
        `,
        controller: function($scope, $element, $attrs) {
            this.menuItems = [];

            this.add = function() {

            }
        }
    });