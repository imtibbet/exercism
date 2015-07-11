function dna(strand) {
    this.strand = (strand===undefined ? "" : strand);
    if (this.strand.match(/[^ACGT]/g)) { // validate
        throw new Error();
    }
    this.count = function(nucleotide) {
        var regex = new RegExp(nucleotide, "g");
        var match = this.strand.match(regex);
        return (match===null ? 0 : match.length);
    }
    this.histogram = function() {
        return {"A":this.count("A"),
                "T":this.count("T"),
                "C":this.count("C"),
                "G":this.count("G")}
    }
    return this;
}
module.exports = dna;