function anagram(word) {
	this.word = word;
	this.matches = function(wordList) {
		var args = Array.prototype.slice.call(arguments);
		wordList = Array.isArray(args[0]) ? args[0] : args;
		var sortWord = function(word) { 
			return word.toUpperCase().split("").sort().join(""); 
		};
		var anagrams = [];
		var sortedWord = sortWord(this.word);
		for (var i=0; i<wordList.length; i++) {
			if ((this.word.toUpperCase() != wordList[i].toUpperCase()) && 
				(sortedWord === sortWord(wordList[i]))) {
				anagrams.push(wordList[i]);
			}
		}
		return anagrams;
	};
	return this;
}

module.exports = anagram;