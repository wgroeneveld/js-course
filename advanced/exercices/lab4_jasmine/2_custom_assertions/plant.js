
var plant = {

	grow: function() {
		var newSeed = Object.create(seed);
		newSeed.generation = (this.originalSeed.generation ? this.originalSeed.generation + 1 : 1);
		return newSeed;
	}

};

var seed = {

	sow: function() {
		var newPlant = Object.create(plant);
		newPlant.originalSeed = this;
		return newPlant;
	}

};