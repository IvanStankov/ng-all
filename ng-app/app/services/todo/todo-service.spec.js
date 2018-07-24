describe('Todo service', function() {

    var TodoService;

    beforeEach(module('miscApp'));

    beforeEach(inject(function(_todoService_) {
        TodoService = _todoService_;
    }));

    it('should exist', function() {
        expect(TodoService).toBeDefined();
    });

    describe('.fetchExistingTodoList()', function() {

        var $q, $httpBackend;

        beforeEach(inject(function(_$q_, $injector) {
            $q = _$q_;
            $httpBackend = $injector.get('$httpBackend');
        }));

        it('should exist', function() {
            expect(TodoService.fetchExistingTodoList).toBeDefined();
        });

        it('should return all todo list', function() {
            var result = {
                todoItems: [{
                    id: 1,
                    name: 'Create',
                    description: 'Create description'
                }, {
                    id: 2,
                    name: 'Delete',
                    description: 'Delete description'
                }]
            };

            $httpBackend.expectGET('http://localhost:8080/api/todo-list')
                .respond(result);

            var promise = TodoService.fetchExistingTodoList();

            expect(promise).toBeDefined();
            expect(promise.then).toBeDefined();

            var actualData;
            promise.then(data => {
                actualData = data;
            });
            $httpBackend.flush();

            expect(angular.equals(actualData, result)).toBe(true);
        });
    });

});