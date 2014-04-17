var pixels = {
    create: function(red, green, blue, alpha) {
	    var aPixel = Object.create(pixel);
		aPixel.red = red;
		aPixel.green = green;
		aPixel.blue = blue;
		aPixel.alpha = alpha;
		return aPixel;
	},
	
	createImage: function(rgbValuesArray) {
		var anImage = Object.create(image);
		anImage.values = rgbValuesArray;
		return anImage;
	},
	
	toImage: function(pixelsArray) {
		var arr = [];
		pixelsArray.forEach(function(px) {
			arr.push(px.red);
			arr.push(px.green);
			arr.push(px.blue);
			arr.push(px.alpha);
		});
		
		return this.createImage(arr);
	}

};

var pixel = {
	toGrayscale: function() {
		var gray = (this.red + this.green + this.blue) / 3;
		return pixels.create(gray, gray, gray, this.alpha);
	}
};

var image = {
	toPixels: function() {
		var pixelsArr = [];
		for(var i = 0; i < this.values.length; i+= 4) {
			pixelsArr.push(pixels.create(this.values[i], this.values[i + 1], this.values[i + 2], this.values[i + 3]));
		}
		return pixelsArr;
	},
	
	toGrayscale: function() {
		var grayscalePixels = this.toPixels().map(function(px) {
			return px.toGrayscale();
		});
		
		return pixels.toImage(grayscalePixels);
	}
}
