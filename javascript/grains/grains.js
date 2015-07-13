function Grains() {
    this.square = function(num) {
        return Math.pow(2, num-1);
    }
    this.total = function() {
        var total = 0;
        for (var i=1; i<=64; i++) {
            total += this.square(i);
        }
        return total;
    }
}
module.exports = Grains;