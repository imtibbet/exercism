var toRna = function toRna(strand) {
  var complements = {"C":"G","G":"C","A":"U","T":"A"}
  var result = "";
  for (var i=0; i<strand.length; i++) {
    result += complements[strand[i]];
  }
  return result;
}
module.exports = toRna;