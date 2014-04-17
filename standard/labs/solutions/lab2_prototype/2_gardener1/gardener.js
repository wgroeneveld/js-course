
var seed = {
	generation: undefined,
    sow: function() {
		var newPlant = Object.create(plant);
		newPlant.seed = this;
		return newPlant;
	}
};

var plant = {
	seed: undefined,
	grow: function() {
		var newSeed = Object.create(this.seed);
		newSeed.generation = (this.seed.generation === undefined ? 1 : this.seed.generation) + 1;
		return newSeed;
	}
};
