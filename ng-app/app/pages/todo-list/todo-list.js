angular.module('miscApp')
    .component('todoList', {
        template: `
            <h1>To-DO list</h1>
            <p>
                <button class="btn btn-success" ui-sref="createNewTodo">Create</button> a new To-do
            </p>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="todo in $ctrl.todoList" ng-class-even="'even'" ng-class-odd="'odd'">
                        <td>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" ng-checked="todo.done" class="custom-control-input" id="done{{todo.id}}"
                                       ng-click="$ctrl.changeStatus(todo, $event)"/>
                                <label class="custom-control-label" for="done{{todo.id}}"></label>
                            </div>
                        </td>
                        <td><a ui-sref="editTodo({itemId: todo.id})" href="#" ng-bind="::todo.name"></a></td>
                        <td ng-bind="::todo.description"></td>
                        <td ng-click="$ctrl.removeTodoItem(todo)"><i class="delete-todo-item far fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        `,
        controller: function($scope, todoService, $log) {

            this.$onInit = function() {
                this._loadTodoList();
            };

            this.removeTodoItem = function(todoItem) {
                todoService.removeTodoItem(todoItem)
                    .then(() => {
                        this._loadTodoList();
                    });
            };

            this.changeStatus = function(todo, e) {
                e.preventDefault();

                var newStatus = !todo.done;
                todoService.updateStatus(todo, newStatus)
                    .then(() => {
                        todo.done = newStatus;
                        $log.info("Todo item status has been changed", todo.id, todo.done);
                    })
                    .catch(error => {
                        $log.error("Failed to toggle todo status", error);
                    });
            };

            this._loadTodoList = function() {
                todoService.fetchExistingTodoList()
                    .then(data => {
                        this.todoList = data.todoItems;
                        $log.log('Fetched data from server: ' + data.todoItems.length);
                    });
            };
        }
    });