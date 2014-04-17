$(document).ready(function() {

  test("price of a normal movie for 1 person is 7 euro", function() {
    movie.amountOfPeople = 1;
    movie.type = movieTypeNormal;
    equal(movie.price(),7);
  });


  test("price of a normal movie with 2 persons is 14 euro", function() {
    movie.amountOfPeople = 2;
    movie.type = movieTypeNormal;
    equal(movie.price(),14);
  });

  test("With 20 people or more you'll get a 15% reduction", function () {
    movie.amountOfPeople = 20;
    movie.type = movieTypeNormal;
    equal(movie.price(), 119);
  });
  
  test("price of a featured movie is 8 euro", function () {
    movie.amountOfPeople = 1;
    movie.type = movieTypeFeatured;
    equal(movie.price(), 8);
  });
  
  test("price of a 3D movie is 11 euro", function () {
    movie.amountOfPeople = 1;
    movie.type = movieType3d;
    equal(movie.price(), 11);
  });

  test("price of a 3D movie for 2 persons is 22 euro", function () {
    movie.amountOfPeople = 2;
    movie.type = movieType3d;
    equal(movie.price(), 22);
  });

});
