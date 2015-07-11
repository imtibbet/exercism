function compute(t1, t2) {
	if (t1.length != t2.length) { 
		throw "DNA strands must be of equal length.";
	}
	var dist = 0;
	if (t1 != t2) { // identical strings have 0 distance
		var tlen = t1.length;
		for (var i=0; i<tlen; i++) {
			if (t1[i] != t2[i]) {
				dist++;
			}
		}
	}
	return dist;
}

module.exports = compute;