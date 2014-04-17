var gardening = (function() {

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
	
	function sowTheSeed() {
		var seed = $(this);
		var mySeedClass = seed.attr("class").replace("seed ", "");
		var freeSpot = $("#lawn .spot.available:first");
		
		function createPlantAndAppear() {
			$("<div class='plant'/>")
				.hide()
				.addClass(mySeedClass)
				.appendTo(freeSpot)
				.fadeIn("slow");
		}
		
		seed
			.css("top", seed.position().top)
			.css("left", seed.position().left)
			.css("position", "absolute")
			.detach()
			.appendTo('body');
		seed.animate({
			left: freeSpot.position().left,
			top: freeSpot.position().top,
		}, 1000, function() {
			seed.hide("slow", function() {
				createPlantAndAppear();
				freeSpot.removeClass("available").addClass("occupied");
			});
		});
	}
	
	return {
		buySeeds: function(amount) {
			for(var i = 0; i < amount; i++) {
				createSeedInBox().click(sowTheSeed);
			}
		},
		mowLawn: function(spots) {
			for(var i = 0; i < spots; i++) {
				createSpotInLawn();
			}
		},
		cleanup: function() {
			$("#seedbox").children().remove();
			$("#lawn").children().remove();
		}
	};

})();
