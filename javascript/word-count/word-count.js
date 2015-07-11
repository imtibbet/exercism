function words(text) {
	var words=text.trim().split(/\s+/);
	var wordCount = {};
	var word;
	for (var i=0; i<words.length; i++){
		word = words[i];
		if (typeof(wordCount[word])==="number") {
			wordCount[word]++;
		} else {
			wordCount[word] = 1;
		}
	}
	return wordCount;
}

module.exports = words;