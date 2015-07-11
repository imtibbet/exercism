function PhoneNumber(input) {
  
  input = input.match(/\d/g).join("");
  this.num = "0000000000";
  if (input.length===10) {
    this.num = input;
  } else if (input.length===11 && input.charAt(0)==="1") {
    this.num = input.slice(1);
  }
  
  this.number = function() {
    return this.num;
  }
  
  this.areaCode = function() {
    return this.num.slice(0,3);
  }
  
  this.toString = function() {
    return "("+this.areaCode()+") "+this.num.slice(3,6)+"-"+this.num.slice(6);
  }
}

module.exports = PhoneNumber;