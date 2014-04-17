
$(document).ready(function() {

  var jan = {name: 'jan', age: 20};
  var piet = {name: 'piet', age: 30};
  var joris = {name: 'joris', age: 40};
  var korneel = {name: 'korneel', age: 50};
  var people = [jan,piet,joris,korneel];

  test("isYoungerThan can be used to filter arrays", function() {
    deepEqual(people.filter(isYoungerThan(35)), [jan,piet]);
  });

  test("isOlderThan can be used to filter arrays", function() {
    deepEqual(people.filter(isOlderThan(35)), [joris,korneel]);
  });
	
});
