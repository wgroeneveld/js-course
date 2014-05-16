


 "3 + 4"
 "3 * 3"
 "3 x 3"
 "3"


var calculate = function(string) {
  var multiply = function(a, b) {
    return a * b;
  }

  var operations = {
    "+": function(a, b) { return a + b; },
    "x": multiply,
	  "*": multiply
  };
 
  if(string.indexOf(" ") < 0) {
    return parseInt(string);
  }
  var stringSplit = string.split(" ");

  3,+,4

  if(operator == +)
    op0 + op2
  if(operator == *)

  return operations[stringSplit[1]](parseInt(stringSplit[0]), parseInt(stringSplit[2]));
};

