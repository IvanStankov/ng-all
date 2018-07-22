angular.module('miscApp')
    .component('createTodoItem', {
        template: `
            <section>
                <h1>Create a new To-Do item</h1>

                <form name="$ctrl.createForm" ng-submit="$ctrl.saveTodo()">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input id="name" class="form-control" required placeholder="Enter name" ng-model="$ctrl.todo.name" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea id="description" class="form-control" placeholder="Describe your 'todo'" ng-model="$ctrl.todo.description">
                        </textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </section>
        `,
        controller: function(todoService, $state, $log) {
            this.todo = {};

            this.saveTodo = function() {
                $log.log('Saving todo...');

                todoService.addTodoItem(this.todo);
                $state.go('todoList');
            }
        }
    });