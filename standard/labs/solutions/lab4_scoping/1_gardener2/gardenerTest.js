$(document).ready(function() {

	test("Sowing seeds by the Garnder create a living plant", function() {
		var plant = Gardener.sow(Gardener.buySeed("wheat"));
		ok(plant, "plant can't be empty or undefined");
	});
	
	test("Sowing seeds and growing plants over 10 generations", function() {
		var aSand = Gardener.buySeed("pumpkin");
		for(var i = 1; i <= 10; i++) {
			var newSeed = aSand.sow().grow();
			equal(newSeed.generation, i + 1);
			aSand = newSeed;
		}
	});

	test("Sowing seeds by the Gardener of two different species give me two different plants", function() {
		var plant1 = Gardener.sow(Gardener.buySeed("wheat"));
		var plant2 = Gardener.sow(Gardener.buySeed("durum"));
		
		ok(plant1 !== plant2, "plant1 is the same as plant2 for another given seed?");
	});
	
	test("Growing a plant returns a new generation seed", function() {
		var seedOfPlant1 = Gardener.buySeed("wheat");
		var plant1 = seedOfPlant1.sow();
	
		var seedResult = plant1.grow();
		ok(seedResult !== seedOfPlant1, "Growing plant1 should not return the same seed which grew plant1 in the first place");
	});
	
	test("I can identify my seed by name after I've bought it", function() {
		var seed = Gardener.buySeed("wheat");
		equal("my seeds are wheat seeds", "my seeds are " + seed + " seeds");
	});
	
	test("the function buySeed for the Gardener has one predefiend argument", function() {
		equal(Gardener.buySeed.length, 1);
	});

	test("the function sow for seeds themselves have no predefined arguments", function() {
		var seed = Gardener.buySeed("wheat");
		equal(seed.sow.length, 0);
	});

	test("the function grow for plants themselves have no predefined argument", function() {
		var seedOfPlant1 = Gardener.buySeed("wheat");
		var plant1 = seedOfPlant1.sow();
		equal(plant1.grow.length, 0);
	});
	
	test("plant and seed objects should not be available on toplevel scope", function() {
		ok(typeof(plant) == "undefined");
		ok(typeof(zaad) == "undefined");
	});

});
