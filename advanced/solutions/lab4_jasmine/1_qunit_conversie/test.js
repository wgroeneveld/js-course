describe("calculations", function() {

	it("should be able to add numbers", function() {
		expect(calculate("3 + 4")).toBe(7);
		expect(calculate("21 + 1")).toBe(22);
	});
	
	it("should return the simple number when no calculations needed", function() {
		expect(calculate("4567")).toBe(4567);
	});
	
	describe("multiplications", function() {
	
		it("should be able to multiply using a star", function() {
			expect(calculate("50 * 10")).toBe(500);
			expect(calculate("5 * 6")).toBe(30);
		});
		
		it("should be able to multiply using a cross", function() {
			expect(calculate("50 x 10")).toBe(500);
			expect(calculate("5 x 6")).toBe(30);
		});
	
	});
});
