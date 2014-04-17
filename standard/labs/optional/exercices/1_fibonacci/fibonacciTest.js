$(document).ready(function() {

	test("I run in only n time to calculate a fibonacci number", function() {
		fiboCounter = 0;
		equal(fibonacci(30), 832040);
		equal(fiboCounter, 29);
	});
	
	test("I don't have trouble calculating big fibonacci numbers", function() {
		var start = new Date().getTime();
		fibonacci(30);
		
		ok(new Date().getTime() - start <= 10);
	});
	
	test("I can calculate the fibonacci number for boundary conditions (0, 1)", function() {
		equal(fibonacci(0), 0);
		equal(fibonacci(1), 1);
	});
	
	test("I can calculate the fibonacci number of some basic random numbers", function() {
		equal(fibonacci(6), 8);
		equal(fibonacci(7), 13);
		equal(fibonacci(8), 21);
		equal(fibonacci(15), 610);
		equal(fibonacci(20), 6765);
	});

});
