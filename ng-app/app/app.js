angular.module('miscApp', ['ui.router', 'ngResource']);

angular.module('miscApp')
    .config(function($stateProvider, $urlRouterProvider) {
        console.log('Inside config');

        $urlRouterProvider.otherwise('/');

        $stateProvider.state({
            name: 'todoList',
            url: '/todo-list',
            template: '<todo-list></todo-list>' // or it could be a component as in the 'about' example
        })
        .state({
            name: 'createNewTodo',
            url: '/todo-list/create',
            component: 'createTodoItem'
        })
        .state({
            name: 'about',
            url: '/about',
            component: 'about',
            resolve: {
                currentDate: function() {
                    return new Date();
                }
            }
        });

    });