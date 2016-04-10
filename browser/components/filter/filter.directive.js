'use strict';

function makeAlphabet() {
	var alphabet = [];
	for(var i = 0; i < 26; i++)
    	alphabet.push(String.fromCharCode(65+i));
    return alphabet;
}

function makeActiveLetters(letters) {
	var activeLetters = {};
	letters.forEach(function(letter) {
		activeLetters[letter] = true;
	});
	return activeLetters;
}

app.directive('filter', function () {
	return {
		scope: {
			letters: '=',
			title: '@',
			getItems: '&',
			items: '='
		},
		link: function (scope, element, attrs) {
           scope.alphabet = makeAlphabet();
           scope.activeLetters = makeActiveLetters(scope.letters);
        },
		templateUrl: '/browser/components/filter/filter.html'
	}
});