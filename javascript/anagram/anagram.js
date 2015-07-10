function anagram(word, anagrams) {
	console.log(word);
	console.log(anagrams);
	var matches = [];
	var sortedWord = word.split("").sort().join("");
	for (var i=0; i<anagrams.length; i++) {
		if (sortedWord === anagrams[i].split("").sort().join("")) {
			matches.push(anagrams[i]);
		}
	}
	console.log(matches);
	return matches;
}

module.export = anagram;