var starts = [  "fly.",
                "spider.\nIt wriggled and jiggled and tickled inside her.",
                "bird.\nHow absurd to swallow a bird!",
                "cat.\nImagine that, to swallow a cat!",
                "dog.\nWhat a hog, to swallow a dog!",
                "goat.\nJust opened her throat and swallowed a goat!",
                "cow.\nI don't know how she swallowed a cow!",
                "horse.\nShe's dead, of course!"]
                
var ends = ["I don't know why she swallowed the fly. Perhaps she'll die.",
            "She swallowed the spider to catch the fly.",
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
            "She swallowed the cat to catch the bird.",
            "She swallowed the dog to catch the cat.",
            "She swallowed the goat to catch the dog.",
            "She swallowed the cow to catch the goat."]
            
var song = new Object();

song.verse = function(verseNumber) {
    verseNumber--; // index from 0
    var lines = ["I know an old lady who swallowed a "+starts[verseNumber]];
    if (verseNumber < starts.length-1) { // last verse has no endings
        for (var i=verseNumber; i>=0; i--) {
            lines.push(ends[i]);
        }
    }
    return lines.join("\n")+"\n";
}

song.verses = function(startingVerse, endingVerse){
    var verses = [];
    for (var i=startingVerse; i<=endingVerse; i++) {
        verses.push(this.verse(i));
    }
    return verses.join("\n")+"\n";
}

module.exports = song;
