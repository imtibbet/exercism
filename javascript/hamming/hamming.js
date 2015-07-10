function compute(t1, t2) {
	if (t1.length != t2.length) { 
		throw "DNA strands must be of equal length.";
	}
	var dist = 0;
	if (t1 != t2) { // identical strings have 0 distance
		var t1chars = t1.split("");
		var t2chars = t2.split("");
		var tlen = t1chars.length;
		for (var i=0; i<tlen; i++) {
			if (t1chars[i] != t2chars[i]) {
				dist++;
			}
		}
	}
	return dist;
}

module.exports = compute;