describe("gardening", function() {

	it("Sowing seeds by the Garnder create a living plant", function() {
		var plant = Gardener.sow(Gardener.buySeed("wheat"));
		expect(plant).not.toBe(null);
	});
	
	it("Sowing seeds and growing plants over 10 generations", function() {
		var aSand = Gardener.buySeed("pumpkin");
		for(var i = 1; i <= 10; i++) {
			var newSeed = aSand.sow().grow();
			expect(newSeed.generation).toBe(i + 1);
			aSand = newSeed;
		}
	});

	it("Sowing seeds by the Gardener of two different species give me two different plants", function() {
		var plant1 = Gardener.sow(Gardener.buySeed("wheat"));
		var plant2 = Gardener.sow(Gardener.buySeed("durum"));
		
		expect(plant1).not.toBe(plant2);
	});
	
	it("Growing a plant returns a new generation seed", function() {
		var seedOfPlant1 = Gardener.buySeed("wheat");
		var plant1 = seedOfPlant1.sow();
	
		var seedResult = plant1.grow();
		expect(seedResult).not.toBe(seedOfPlant1);
	});
	
	it("I can identify my seed by name after I've bought it", function() {
		var seed = Gardener.buySeed("wheat");
		expect("my seeds are " + seed + " seeds").toEqual("my seeds are wheat seeds");
	});
	
	it("the function buySeed for the Gardener has one predefiend argument", function() {
		expect(Gardener.buySeed.length).toBe(1);
	});

	it("the function sow for seeds themselves have no predefined arguments", function() {
		var seed = Gardener.buySeed("wheat");
		expect(seed.sow.length).toBe(0);
	});

	it("the function grow for plants themselves have no predefined argument", function() {
		var seedOfPlant1 = Gardener.buySeed("wheat");
		var plant1 = seedOfPlant1.sow();
		expect(plant1.grow.length).toBe(0);
	});
	
	it("plant and seed objects should not be available on toplevel scope", function() {
		expect(typeof(plant)).toEqual("undefined");
		expect(typeof(zaad)).toEqual("undefined");
	});

});
