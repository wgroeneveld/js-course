var fiboCounter = 0;

function store(arr, f) {
	var decorator = function(n) {
		if(!arr.hasOwnProperty(n)) {
			arr[n] = f(decorator, n);
		}
		return arr[n];
	};
	return decorator;
}

var fibonacci = store([0, 1], function(f, n) {
	fiboCounter++;
	return f(n - 2) + f(n - 1);
});

/*
//original function:
function fibonacci(n) {
  fiboCounter++;
  return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
}
*/