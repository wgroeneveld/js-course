
describe("counting", function() {

  it("createCounter returns a function that returns 1 when first called", function() {
	var counterFunction = createCounter();
	var actual = counterFunction();
	expect(actual).toBe(1);
  });

  it("createCounter returns a function that when called twice, will return 2", function() {
	var counterFunction = createCounter();
	counterFunction();
	var actual = counterFunction();
	expect(actual).toBe(2);
  });
  
  it("every time createCounter is called, an independent counter function is created", function() {
	var counterFunction1 = createCounter();
	var counterFunction2 = createCounter();
	
	expect(counterFunction1()).toBe(1);
	expect(counterFunction1()).toBe(2);
	expect(counterFunction2()).toBe(1);
	expect(counterFunction2()).toBe(2);
	expect(counterFunction2()).toBe(3);
  });
	
});
