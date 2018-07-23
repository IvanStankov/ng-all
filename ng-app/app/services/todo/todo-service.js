angular.module('miscApp')
    .service('todoService', function($http, $resource) {

        var TodoList = $resource("http://localhost:8080/api/todo-list/:itemId", {itemId: '@id'}, {
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

        this.fetchItem = function(itemId) {
            return TodoList.get({itemId: itemId}).$promise;
        };

        this.addTodoItem = function(item) {
//            this.todoList.push(item);
            var todoItem = new TodoList(item);
            return todoItem.$save();
        };

        this.updateTodoItem = function(todoItem) {
            return todoItem.$update();
        }

        this.removeTodoItem = function(todoItem) {
            return TodoList.remove({itemId: todoItem.id}).$promise;
        }
    });