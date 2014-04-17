describe("the seedbox", function() {

	var theGardener = Object.create(gardening);
	var amount = 10;
	beforeEach(function() {
		jQuery.fx.off = true;
		theGardener.buySeeds(amount);
		theGardener.mowLawn(amount);
	});
	
	afterEach(function() {
		jQuery.fx.off = false;
		theGardener.cleanup();
	});

	describe("gardening setup", function() {
		
		it("should have bought a set amount of seeds", function() {
			expect($("#seedbox .seed").length).toBe(amount);
		});
		
		it("should have mown the lawn and created a set amount of available spots", function() {
			expect($("#lawn .spot.available").length).toBe(amount);
			expect($(".spot.occupied")).not.toBeVisible();
		});
	
		it("should throw away all seeds while cleaning up", function() {
			theGardener.cleanup();
			expect($(".seed").length).toBe(0);
		});
		
		it("should clear all spots on the lawn while cleaning up", function() {
			theGardener.cleanup();
			expect($(".spot").length).toBe(0);
		});
	
	});
	
	describe("creating plants of the same species", function() {
		function plantIsSameSpeciesAsSeed(species) {
			var seed = $(".seed." + species + ":first");
			seed.click();
			
			waitsFor(function() {
				return seed.is(":hidden");
			});
			
			runs(function() {
				expect($(".plant:first")).toHaveClass(species);
			});		
		}
	
		it("should not create plants before sowing seeds", function() {
			expect($(".plant").length).toBe(0);
			$(".seed:first").click();
			expect($(".plant").length).toBe(1);
		});
		
		it("a plant should be a pumpkin if the seed was a pumpkinseed", function() {
			plantIsSameSpeciesAsSeed("pumpkin");
		});

		it("a plant should be a cherrybomb if the seed was a cherryseed", function() {
			plantIsSameSpeciesAsSeed("cherrybomb");
		});

		it("a plant should be a peashooter if the seed was a peaseed", function() {
			plantIsSameSpeciesAsSeed("peashooter");
		});
	});
	
	describe("sowing seeds", function() {
	
		var seed;
		beforeEach(function() {
			seed = $(".seed:first");
			seed.trigger("click");
			
		  this.addMatchers({
			toBeGreaterOrEqualThan: function(expected) {
			  return this.actual >= expected;
			}
		  });
		});
		
		function seedIsHidden() {
			return seed.is(":hidden");
		}
				
		it("should move the seed onto the lawn and hide it when sowing", function() {
			waitsFor(seedIsHidden);
			
			function getPositionFromCss(pos) {
				return Math.round(seed.css(pos).replace('px', ''));
			}
			
			runs(function() {
				var occupiedSpotPos = $(".spot:first").position();
				expect(getPositionFromCss('top')).toBeGreaterOrEqualThan(Math.round(occupiedSpotPos.top));
				expect(getPositionFromCss('left')).toBeGreaterOrEqualThan(Math.round(occupiedSpotPos.left));
			});
		});
		
		it("when the animation start, the css attribute 'position' should be absolute", function() {
			expect(seed.css('position')).toBe('absolute');
		});

		it("when the animation start, the seed should have be a direct child of body", function() {
			expect(seed).toBe('body > .seed');
		});
		
		it("should have a growing plant when the seed has been sown onto the lawn", function() {
			waitsFor(seedIsHidden);
			
			runs(function() {
				expect($(".plant:first")).toBeVisible();
			});
		});
	
	});

});