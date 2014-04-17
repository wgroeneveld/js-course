
var Gardener = (function() {
	var seed = {
		sow: function() {
			var newPlant = Object.create(plant);
			newPlant.seed = this;
			return newPlant;
		},
		
		toString: function() {
			return this.name ? this.name : "unknown seed";
		}
	};

	var plant = {
		grow: function() {
			var newSeed = Object.create(this.seed);
			newSeed.generation = (this.seed.generation === undefined ? 1 : this.seed.generation) + 1;
			return newSeed;
		}
	};

	return {
		buySeed: function(name) {
			var seedResult = Object.create(seed);
			seedResult.name = name;
			return seedResult;
		},
		
		sow: function(seed) {
			return seed.sow();
		}
	};
	
}());
