describe("movie tickets", function() {

  it("price of a normal movie for 1 person is 7 euro", function() {
    movie.amountOfPeople = 1;
    movie.type = movieTypeNormal;
    expect(movie.price()).toBe(7);
  });


  it("price of a normal movie with 2 persons is 14 euro", function() {
    movie.amountOfPeople = 2;
    movie.type = movieTypeNormal;
    expect(movie.price()).toBe(14);
  });

  it("With 20 people or more you'll get a 15% reduction", function () {
    movie.amountOfPeople = 20;
    movie.type = movieTypeNormal;
    expect(movie.price()).toBe(119);
  });
  
  it("price of a featured movie is 8 euro", function () {
    movie.amountOfPeople = 1;
    movie.type = movieTypeFeatured;
    expect(movie.price()).toBe(8);
  });
  
  it("price of a 3D movie is 11 euro", function () {
    movie.amountOfPeople = 1;
    movie.type = movieType3d;
    expect(movie.price()).toBe(11);
  });

  it("price of a 3D movie for 2 persons is 22 euro", function () {
    movie.amountOfPeople = 2;
    movie.type = movieType3d;
    expect(movie.price()).toBe(22);
  });

});
