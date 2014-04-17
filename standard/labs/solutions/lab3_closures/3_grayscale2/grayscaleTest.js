
$(document).ready(function() {

	var imageArray = [1, 2, 3, 4, 10, 20, 30, 40 ];

	test("I can create an image and ask for it's raw values", function() {
		var image = pixels.createImage(imageArray);
		equal(image.values, imageArray);
	});

	test("I can convert an image into a list of pixels", function() {
		var image = pixels.createImage(imageArray);
		var pixelsArray = image.toPixels();
		equal(pixelsArray.length, 2);
		
		deepEqual(pixelsArray[0], pixels.create(1, 2, 3, 4));
		deepEqual(pixelsArray[1], pixels.create(10, 20, 30, 40));
	});
	
	test("I can convert an array of pixels into an image", function() {
		var image = pixels.toImage( [ pixels.create(1, 2, 3, 4), pixels.create(10, 20, 30, 40) ] );
		deepEqual(image.values, imageArray);
	});
	
	test("I can convert an image into it's grayscale counterpart", function() {
		var image = pixels.createImage(imageArray);
		var grayscaleImage = image.toGrayscale();
		deepEqual(grayscaleImage.values, [ 2, 2, 2, 4, 20, 20, 20, 40 ]);
	});
	
	test("A grayscale image has individual grayscaled pixels", function() {
		var image = pixels.createImage(imageArray);
		var grayscaleImage = image.toGrayscale();
		var resultGraypixel1 = grayscaleImage.toPixels()[0];
		
		deepEqual(resultGraypixel1, pixels.create(1, 2, 3, 4).toGrayscale());
	});
	
});
