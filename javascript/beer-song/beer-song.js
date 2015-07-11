String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var Beer = new Object();

Beer.bottles = function(num) { 
    var bottles = (num===1 ? " bottle" : " bottles");
    if (num===-1) { num = 99; }
    else if (num===0) { num = "no more"; }
    return num+bottles; 
};
    
Beer.action = function(num) {
    if (num===0) { return "Go to the store and buy some more"; }
    var ref = (num===1 ? "it" : "one");
    return "Take "+ref+" down and pass it around";
}
                                    
Beer.verse = function(verseNumber) {
    var verse = this.bottles(verseNumber).capitalize() + " of beer on the wall, " +
                this.bottles(verseNumber)+ " of beer.\n" +
                this.action(verseNumber) + ", " +
                this.bottles(verseNumber-1) + " of beer on the wall.";
    return verse+"\n"
}

Beer.sing = function(startingVerse, endingVerse){
    if (endingVerse===undefined) { endingVerse=0; }
    var verses = [];
    for (var i=startingVerse; i>=endingVerse; i--) {
        verses.push(this.verse(i));
    }
    return verses.join("\n");
}

module.exports = Beer;
console.log(Beer.sing(99));