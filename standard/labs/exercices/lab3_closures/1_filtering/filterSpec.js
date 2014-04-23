
describe("filtering", function() {

  var jan = {name: 'jan', age: 20};
  var piet = {name: 'piet', age: 30};
  var joris = {name: 'joris', age: 40};
  var korneel = {name: 'korneel', age: 50};
  var people = [jan,piet,joris,korneel];

  it("isYoungerThan can be used to filter arrays", function() {
    expect(people.filter(isYoungerThan(35))).toEqual([jan,piet]);
  });

  it("isOlderThan can be used to filter arrays", function() {
    expect(people.filter(isOlderThan(35))).toEqual([joris,korneel]);
  });
	
});
