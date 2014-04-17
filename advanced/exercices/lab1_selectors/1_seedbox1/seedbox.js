function generateSeeds(amount) {
	var types = [ "cherrybomb", "pumpkin", "peashooter" ];
	
	for(var i = 0; i < amount; i++) {
		var seed = $("<div class='seed'/>");
		seed.appendTo($("#seedbox"));
	}
	
}

function cleanupSeeds() {
	$(".seed").remove();
}
