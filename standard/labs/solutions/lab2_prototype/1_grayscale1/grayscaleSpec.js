
describe("grayscales", function() {

	it("I can create a pixel and ask for it's RGB values", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		expect(aPixel.red).toBe(1);
		expect(aPixel.green).toBe(2);
		expect(aPixel.blue).toBe(3);
		expect(aPixel.alpha).toBe(4);
	});

	it("I can convert pixels to it's grayscale values", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		var grayscalePixel = aPixel.toGrayscale();
		
		expect(grayscalePixel.red).toBe(2);
		expect(grayscalePixel.green).toBe(2);
		expect(grayscalePixel.blue).toBe(2);
		expect(grayscalePixel.alpha).toBe(4);
	});
	
	it("The toGrayscale function is part of the prototype of a pixel", function() {
		var aPixel = pixels.create(1, 2, 3, 4);
		expect(pixel.isPrototypeOf(aPixel)).toBe(true);
		expect(aPixel.hasOwnProperty("toGrayscale")).toBe(false);
	});
		
});
