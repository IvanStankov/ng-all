describe('Even letter uppercase filter', function() {

    var evenLetterUppercaseFilter;

    beforeEach(function() {
        module('miscApp');

        inject(function($filter) {
            evenLetterUppercaseFilter = $filter('evenLetterUppercase');
        });
    });

    it('should uppercase even letters in a word', function() {
        // Given
        var input = 'Hello';

        // When
        var result = evenLetterUppercaseFilter(input);

        // Then
        expect(result).toEqual('HeLlO');
    });

    it('should uppercase even letters in a phrase ', function() {
        // Given
        var input = 'Hello, world';

        // When
        var result = evenLetterUppercaseFilter(input);

        // Then
        expect(result).toEqual('HeLlO, WoRlD');
    });

});