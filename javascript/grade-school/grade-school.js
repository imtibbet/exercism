function School() {
    
    // init array of 12 grades, each of which is an array (of names)
    this.grades = [];
    for (var i=0; i<12; i++) {
        this.grades.push([]);
    }
    
    // add a student to a grade (not kept ordered)
    this.add = function(name, grade) {
        this.grades[grade].push(name);
    }
    
    // build the roster, containing only non-empty grades
    this.roster = function() {
        var roster = {};
        for (var i=0; i<this.grades.length; i++) {
            if (this.grades[i].length === 0) {
                continue;
            }
            roster[i] = this.grades[i].sort();
        }
        return roster;
    }
    
    // return the students in a particular grade
    this.grade = function(grade) {
        return this.grades[grade].sort();
    }
}
module.exports = School;