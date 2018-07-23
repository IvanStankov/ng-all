angular.module('miscApp')
    .component('topMenu', {
        transclude: true,
        template: `
            <nav>
                Main menu
                <ul class="nav">
                    <ng-transclude></ng-transclude>
                </ul>
            </nav>
        `,
        controller: function($scope, $element, $attrs) {
            this.menuItems = [];

            this.add = function() {

            }
        }
    });