$(document).ready(function() {

	function assertIsPlant(species) {
		ok(plant.isPrototypeOf(species), "species is no valid plant object");
		equal(false, species.hasOwnProperty("grow"), "species has own grow implementation?? use prototypal inheritance!");
	}

	test("sowing seeds give me a new living plant", function() {
		var plant = Object.create(seed).sow();
		
		ok(plant, "plant can't be empty or undefined");
		assertIsPlant(plant);
	});
	
	test("sowing seeds and growing plants give me a new second generation batch of seeds, based upon the first", function() {
		var seed1 = Object.create(seed);
		var plant1 = seed1.sow();
		var newSeed = plant1.grow();
		
		equal(2, newSeed.generation);
		ok(seed1.isPrototypeOf(newSeed));
	});

	test("sowing seeds and growing plants for over 10 generations", function() {
		var aSeed = Object.create(seed);
		for(var i = 1; i <= 10; i++) {
			var newSeed = aSeed.sow().grow();
			equal(i + 1, newSeed.generation);
			aSeed = newSeed;
		}
	});
	
	test("sowing seeds of two different species result in two different plants", function() {
		var plant1 = Object.create(seed).sow();
		var plant2 = Object.create(seed).sow();
		
		ok(plant1 !== plant2, "plant1 is the same as plant2 for another given seed? We live in a strange world indeed!");
	});

});
