function Triangle(s1,s2,s3) {
    this.sides = [s1,s2,s3].sort();
    this.kind = function() {
        
        // validate sides to ensure a triangle is possible
        for (var i=0; i<3; i++) {
            if (this.sides[i] <= 0) {
                throw new Error();
            }
        }
        if (this.sides[0]+this.sides[1] < this.sides[2]) {
            throw new Error();
        }
        
        // determine the kind of triangle
        if (this.sides[0] === this.sides[2]) {
            return "equilateral";
        }
        for (var i=0; i<2; i++) {
            if (this.sides[i] === this.sides[i+1]) {
                return "isosceles";
            }
        }
        return "scalene";
    }
}
module.exports = Triangle;