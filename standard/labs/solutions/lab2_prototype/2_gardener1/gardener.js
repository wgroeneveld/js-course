
var seed = {
	generation: 1,
    sow: function() {
		var newPlant = Object.create(plant);
		newPlant.seed = this;
		return newPlant;
	}
};

var plant = {
	seed: undefined,
	grow: function() {
		
		var newSeed = Object.create(seed);


		newSeed.generation = this.seed.generation + 1;
		return newSeed;
	}
};
