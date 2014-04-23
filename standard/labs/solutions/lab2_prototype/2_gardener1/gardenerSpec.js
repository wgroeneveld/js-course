describe("gardening", function() {

	function assertIsPlant(species) {
		expect(plant.isPrototypeOf(species)).toBeTruthy();
		expect(species.hasOwnProperty("grow")).toBeFalsy();
	}

	it("sowing seeds give me a new living plant", function() {
		var plant = Object.create(seed).sow();
		
		expect(plant).not.toBe(null);
		assertIsPlant(plant);
	});
	
	it("sowing seeds and growing plants give me a new second generation batch of seeds, based upon the first", function() {
		var seed1 = Object.create(seed);
		var plant1 = seed1.sow();
		var newSeed = plant1.grow();
		
		expect(newSeed.generation).toBe(2);
		expect(seed1.isPrototypeOf(newSeed)).toBeTruthy();
	});

	it("sowing seeds and growing plants for over 10 generations", function() {
		var aSeed = Object.create(seed);
		for(var i = 1; i <= 10; i++) {
			var newSeed = aSeed.sow().grow();
			expect(newSeed.generation).toBe(i + 1);
			aSeed = newSeed;
		}
	});
	
	it("sowing seeds of two different species result in two different plants", function() {
		var plant1 = Object.create(seed).sow();
		var plant2 = Object.create(seed).sow();
		
		expect(plant1).not.toBe(plant2);
	});

});
