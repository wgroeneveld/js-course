var pixels = {
    create: function(red, green, blue, alpha) {
	    var aPixel = Object.create(pixel);
		aPixel.red = red;
		aPixel.green = green;
		aPixel.blue = blue;
		aPixel.alpha = alpha;
		return aPixel;
	}
};

var pixel = {
	toGrayscale: function() {
		var gray = (this.red + this.green + this.blue) / 3;
		return pixels.create(gray, gray, gray, this.alpha);
	}
}
