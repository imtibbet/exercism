var namesUsed = [""];

function genName() {
    var name = "";
    var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "0123456789";
    while (namesUsed.indexOf(name) != -1) {
      for(var i=0; i < 2; i++) {
          name += capLetters.charAt(Math.floor(Math.random() * capLetters.length));
      }
      for(var i=0; i < 3; i++) {
          name += nums.charAt(Math.floor(Math.random() * nums.length));
      }
    }
    namesUsed.push(name);
    return name;
}

function Robot() {
  if (this.name === undefined) {
    this.name = genName();
  }
  this.reset = function() {
    this.name = genName();
  }
}

module.exports = Robot;