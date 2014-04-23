
describe("grayscale", function() {

	var imageArray = [1, 2, 3, 4, 10, 20, 30, 40 ];

	it("I can create an image and ask for it's raw values", function() {
		var image = pixels.createImage(imageArray);
		expect(image.values).toEqual(imageArray);
	});

	it("I can convert an image into a list of pixels", function() {
		var image = pixels.createImage(imageArray);
		var pixelsArray = image.toPixels();
		expect(pixelsArray.length).toBe(2);
		
		expect(pixels.create(1, 2, 3, 4)).toEqual(pixelsArray[0]);
		expect(pixels.create(10, 20, 30, 40)).toEqual(pixelsArray[1]);
	});
	
	it("I can convert an array of pixels into an image", function() {
		var image = pixels.toImage( [ pixels.create(1, 2, 3, 4), pixels.create(10, 20, 30, 40) ] );
		expect(image.values).toEqual(imageArray);
	});
	
	it("I can convert an image into it's grayscale counterpart", function() {
		var image = pixels.createImage(imageArray);
		var grayscaleImage = image.toGrayscale();
		expect(grayscaleImage.values).toEqual([ 2, 2, 2, 4, 20, 20, 20, 40 ]);
	});
	
	it("A grayscale image has individual grayscaled pixels", function() {
		var image = pixels.createImage(imageArray);
		var grayscaleImage = image.toGrayscale();
		var resultGraypixel1 = grayscaleImage.toPixels()[0];
		
		expect(pixels.create(1, 2, 3, 4).toGrayscale()).toEqual(resultGraypixel1);
	});
	
});
