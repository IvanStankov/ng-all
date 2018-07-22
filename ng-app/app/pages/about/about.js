angular.module('miscApp')
    .component('about', {
        bindings: {
            currentDate: '<'// comes from state provider
        },
        template: `
            <section>
                <h1>About</h1>
                <p>
                    This is a test AngularJS application
                </p>
                <time ng-bind="::$ctrl.currentDate | date:'medium' "></time>
            </section>
        `,
        controller: function($log) {
            var self = this;
            this.$onInit = function() {
                $log.log(self.currentDate);
            }
        }
    });