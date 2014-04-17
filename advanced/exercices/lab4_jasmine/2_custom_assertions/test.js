describe("my tests", function() {
	
	it("Making a statement", function() {
		obj = Object.create(window.seed).sow();
		expect(window.plant.isPrototypeOf(obj)).toBe(true);
	});
	
	it("original seeds are cool", function() {
		s = Object.create(window.seed);
		p = s.sow();
		expect(p.originalSeed).toBe(s);
	});

	it("statement 42", function() {
		obj = Object.create(window.seed).sow().grow().sow();
		expect(window.plant.isPrototypeOf(obj)).toBe(true);
	});
	
});
