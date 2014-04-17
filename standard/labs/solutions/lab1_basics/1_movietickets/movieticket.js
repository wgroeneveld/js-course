var movie = {
  amountOfPeople: 0,
  type: movieTypeNormal,
  reductionFactor: function () {
    if (this.amountOfPeople >= 20) {
      return 0.85;
    }
    return 1;
  },
  price: function() {
    return this.amountOfPeople * this.type * this.reductionFactor();
  }
};

var movieTypeNormal = 7;
var movieTypeFeatured = 8;
var movieType3d = 11;

