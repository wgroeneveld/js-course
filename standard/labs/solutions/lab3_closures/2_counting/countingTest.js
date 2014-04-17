
$(document).ready(function() {

  test("createCounter returns a function that returns 1 when first called", function() {
	var counterFunction = createCounter();
	var actual = counterFunction();
	equal(actual, 1);
  });

  test("createCounter returns a function that when called twice, will return 2", function() {
	var counterFunction = createCounter();
	counterFunction();
	var actual = counterFunction();
	equal(actual, 2);
  });
  
  test("every time createCounter is called, an independent counter function is created", function() {
	var counterFunction1 = createCounter();
	var counterFunction2 = createCounter();
	
	equal(counterFunction1(), 1);
	equal(counterFunction1(), 2);
	equal(counterFunction2(), 1);
	equal(counterFunction2(), 2);
	equal(counterFunction2(), 3);
  });
	
});
