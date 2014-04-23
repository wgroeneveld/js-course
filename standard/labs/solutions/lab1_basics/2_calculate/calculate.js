var calculate = function(string) {
  function multiply(a, b) { return a * b; }
  var operations = {
    "+": function(a, b) { return a + b; },
    "x": multiply,
	"*": multiply
  };
 
  if(string.indexOf(" ") < 0) {
    return parseInt(string);
  }
  var stringSplit = string.split(" ");
  return operations[stringSplit[1]](parseInt(stringSplit[0]), parseInt(stringSplit[2]));
};
