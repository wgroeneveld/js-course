describe("sowings seeds", function() {
	
	var aSeed, aPlant;
	
	beforeEach(function() {
		aSeed = Object.create(seed);
		aPlant = aSeed.sow();
	
		this.addMatchers({
			toBeAPlant: function() {
				return plant.isPrototypeOf(this.actual);
			},
			toBeTheSeedOf: function(plant) {
				var seed = this.actual;
				return plant.originalSeed === seed;
			}
		});
	});

	it("should create a plant for each seed sown", function() {		
		expect(aPlant).toBeAPlant();
	});
	
	it("as a plant, should remember the original seed it's grown from", function() {
		expect(aSeed).toBeTheSeedOf(aPlant);	
	});

	it("should produce seed when the plant has been grown, onto the next generation", function() {
		var newPlant = aPlant.grow().sow();
		expect(newPlant).toBeAPlant();
	});
	
});
