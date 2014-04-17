
$(document).ready(function() {

	test("I can create a pixel and ask for it's RGB values", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		equal(aPixel.red, 1);
		equal(aPixel.green, 2);
		equal(aPixel.blue, 3);
		equal(aPixel.alpha, 4);
	});

	test("I can convert pixels to it's grayscale values", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		var grayscalePixel = aPixel.toGrayscale();
		
		equal(grayscalePixel.red, 2);
		equal(grayscalePixel.green, 2);
		equal(grayscalePixel.blue, 2);
		equal(grayscalePixel.alpha, 4);
	});
	
	test("The toGrayscale function is part of the prototype of a pixel", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		equal(pixel.isPrototypeOf(aPixel), true);
		equal(aPixel.hasOwnProperty("toGrayscale"), false);
	});
		
});
