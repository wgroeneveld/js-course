describe("calculations", function() {

	it("can add numbers", function() {
	  expect(calculate("3 + 4")).toBe(7);
	  expect(calculate("21 + 1")).toBe(22);
	});
	 
	it("can multiply with star", function() {
	  expect(calculate("50 * 10")).toBe(500);
	  expect(calculate("5 * 6")).toBe(30);
	});
	 
	it("can multiply with cross", function() {
	  expect(calculate("50 x 10")).toBe(500);
	  expect(calculate("5 x 6")).toBe(30);
	});

	it("return the number when no calculations needed", function() {
		expect(calculate("4567")).toBe(4567);
	});
	
	it("I did not cheat using eval(), I swear!", function() {
		expect(calculate.toString().indexOf("eval(") < 0).toBeTruthy();
	});
	
	it("I did not pretend to be smart using Function(), I swear!", function() {
		expect(calculate.toString().indexOf("Function(") < 0).toBeTruthy();
	});
});
