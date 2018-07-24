angular.module('miscApp')
    .filter('evenLetterUppercase', function() {

        function uppercaseLetters(input) {
            var letters = input.split("")
                .map((value, index) => {
                    if (index % 2) {
                        return value;
                    } else {
                        return value.toUpperCase();
                    }
                });
            return letters.join("");
        }

        return function(input) {
            var words = input.split(" ");
            for (var i = 0; i < words.length; i++) {
                var word = words[i];

                if (word == "") {
                    continue;
                }

                words[i] = uppercaseLetters(word);
            }
            return words.join(" ");
        }
    });