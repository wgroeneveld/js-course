function generateSeeds(amount) {

	var possibleSeeds = [ "peashooter", "pumpkin", "cherrybomb" ];

	for(var i = 0; i < amount; i++) {
		var seedClass = possibleSeeds[Math.round(Math.random() * 2)];
		$("<div class='seed'/>")
			.addClass(seedClass)
			.appendTo($("#seedbox"));
	}

}

function cleanupSeeds() {
	$("#seedbox").find(".seed").remove();
}