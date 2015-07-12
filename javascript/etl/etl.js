function transform(old) {
    var result = {};
    var scores = [];
    var scoreLetters;
    for (var score in old) {
        if (old.hasOwnProperty(score)) {
            scoreLetters = old[score];
            for (var i=0; i<scoreLetters.length; i++) {
                result[scoreLetters[i].toLowerCase()] = Number(score);
            }
        }
    }
    return result;
}
module.exports = transform;