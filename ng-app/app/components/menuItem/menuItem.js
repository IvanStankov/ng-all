angular.module('miscApp')
    .component('menuItem', {
        require: {
            topMenu: '^^'
        },
        transclude: true,
        bindings: {
            name: '@',
            state: '@'
        },
        template: `
            <li class="menuItem">
                <a ui-sref="{{::$ctrl.state}}" href="#" ng-bind="$ctrl.name" ui-sref-active="active"></a>
            </li>
        `,
        controller: function($scope, $element, $attrs, $log) {

            this.$onInit = function() {
                $log.info('Generating menu item: ' + this.name);
            }
        }
    });