var fiboCounter = 0;
var fibonacci = function(n) {
	
	function fibhelper(nmin2, nmin1, nth) {
		if (nth == n) {
			return nmin1;
		}
		
		fiboCounter++;
		return fibhelper(nmin1, nmin2 + nmin1, nth + 1);
	}
	
	if (n < 2) return n;
	return fibhelper(0, 1, 1);
}
