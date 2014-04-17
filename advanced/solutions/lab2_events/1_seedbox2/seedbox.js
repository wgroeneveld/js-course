function generateSeeds(amount) {

	var possibleSeeds = [ "peashooter", "pumpkin", "cherrybomb" ];

	function createSeedInBox() {
		var seedClass = possibleSeeds[Math.round(Math.random() * 2)];
		return $("<div class='seed'/>")
			.addClass(seedClass)
			.appendTo($("#seedbox"));	
	}

	function createSpotInLawn() {
		$("<div class='spot'/>")
			.addClass("available")
			.appendTo($("#lawn"));	
	}
	
	function createPlantInLawnForSeed(seed) {
		var mySeedClass = seed.attr("class").replace("seed ", "");
		var freeSpot = $("#lawn .spot.available:first");
		$("<div class='plant'/>")
			.addClass(mySeedClass)
			.appendTo(freeSpot);
		freeSpot.removeClass("available").addClass("occupied");
	}
	
	for(var i = 0; i < amount; i++) {
		var seed = createSeedInBox();
		seed.click(function() {
			createPlantInLawnForSeed($(this));
			$(this).remove();
		});

		createSpotInLawn();
	}

}

function cleanupSeeds() {
	$("#seedbox").children().remove();
	$("#lawn").children().remove();
}