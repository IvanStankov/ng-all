angular.module('miscApp')
    .component('manageTodoItem', {
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
        controller: function(todoService, $state, $stateParams, $log) {

            this.$onInit = function() {
                var passedId = $stateParams.itemId;
                if (passedId) {
                    $log.log('Edit todo item', passedId);
                    todoService.fetchItem(passedId)
                        .then(item => {
                            this.todo = item;
                        });
                } else {
                    $log.log('Create new todo item');
                    this.todo = {};
                }
            };

            this.saveTodo = function() {
                var promise;
                if (this.todo.id) {
                    $log.log('Updating existing todo', this.todo.id);
                    promise = todoService.updateTodoItem(this.todo);
                } else {
                    $log.log('Saving todo...');
                    promise = todoService.addTodoItem(this.todo);
                }

                promise.then(() => {
                    $state.go('todoList');
                });
            }
        }
    });