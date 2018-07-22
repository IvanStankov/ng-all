angular.module('miscApp')
    .service('todoService', function($http, $resource) {

        var TodoList = $resource("http://localhost:8080/api/todo-list/:itemId", {id: '@id'}, {
            query: {
                method: 'GET',
                isArray: false
            },
            update: {
                method: 'PUT'
            }
        });

//        this.todoList = [{
//            name: "Create something",
//            description: "Create something useful"
//        }, {
//            name: "Break something",
//            description: "Break something useless"
//        }, {
//            name: "Buy something",
//            description: "Buy something tasty"
//        }];

        this.fetchExistingTodoList = function() {
//            return this.todoList;
            return TodoList.query().$promise;
        };

        this.addTodoItem = function(item) {
//            this.todoList.push(item);
            var todoItem = new TodoList(item);
            todoItem.$save();
        };

        this.removeTodoItem = function() {

        }
    });