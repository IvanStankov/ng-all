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
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="todo in $ctrl.todoList" ng-class="{{$odd ? 'odd' : 'even'}}">
                        <td><input type="checkbox" /></td>
                        <td ng-bind="::todo.name"></td>
                        <td ng-bind="::todo.description"></td>
                    </tr>
                </tbody>
            </table>
        `,
        controller: function($scope, todoService, $log) {
            todoService.fetchExistingTodoList()
                .then(data => {
                    this.todoList = data.todoItems;
                    $log.log('Fetched data from server: ' + data.todoItems.length);
                });
        }
    });