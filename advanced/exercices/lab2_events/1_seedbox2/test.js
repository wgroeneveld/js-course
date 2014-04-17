describe("the seedbox", function() {

	afterEach(cleanupSeeds);

	describe("seedbox part 2 tests", function() {
		describe("creating spots on the lawn", function() {
		
			beforeEach(function() {
				generateSeeds(10);
			});
			it("should create a set amount of spot divs", function() {
				expect($(".spot").length).toBe(10);
			});
			
			it("should contain all spots within the lawn", function() {
				var amountOfSpots = $(".spot").length;
				var amountOfSpotsInLawn = $("#lawn").find(".spot").length;

				expect(amountOfSpots).toBeGreaterThan(0);
				expect(amountOfSpotsInLawn).toEqual(amountOfSpots);		
			});
			
			it("should create only available spots for the first time", function() {
				expect($(".spot.available").length).toBe(10);
				expect($(".spot.occupied")).not.toExist();
			});
		});
		
		describe("occupying spots on the lawn by sowing seeds", function() {
			beforeEach(function() {
				generateSeeds(10);
				$(".seed:first").click();
			});
			
			it("should make the seed disappear after clicking on it", function() {
				expect($(".seed:visible").length).toBe(9);
			});
			
			it("should make a plant appear on the first available spot after clicking on a seed", function() {
				expect($(".plant").length).toBe(1);
				expect($(".spot:first")).toContain($(".plant"));
				
				$(".seed:first").click();
				expect($(".plant").length).toBe(2);
				expect($(".spot.available").length).toBe(8);
				expect($(".spot:nth-child(1)")).not.toBeEmpty();
				expect($(".spot:nth-child(2)")).not.toBeEmpty();
				expect($(".spot:nth-child(3)")).toBeEmpty();
			});
			
			it("should mark a spot occupied after a plant has been grown", function() {
				expect($(".spot.occupied")).not.toBeEmpty();
				expect($(".spot.occupied").length).toBe(1);
				
				$(".seed:first").click();
				expect($(".spot.occupied").length).toBe(2);
			});

			it("new plant should have same class as seed", function () {
				$('.seed.pumpkin').click();

				expect($(".spot:nth-child(2) .plant")).toHaveClass("pumpkin");
			});
		});
	});
	
	describe("seedbox part 1 tests", function() {
		it("should create a set amount of seed divs", function() {
			generateSeeds(13);		
			expect($(".seed").length).toBe(13);
		});
		
		function expectSeedsCreated() {
			expect($(".seed")).toExist();
		}
		
		it("should add a random seed class to each created seed", function() {
			generateSeeds(10);
			expectSeedsCreated();
			$(".seed").each(function() {
				var me = $(this);
				var classSet = me.hasClass("peashooter") || me.hasClass("pumpkin") || me.hasClass("cherrybomb");
				
				expect(classSet).toBe(true);
			});
		});
		
		it("should contain all seeds within the seedbox", function() {
			generateSeeds(9);
			var amountOfSeeds = $(".seed").length;
			var amountOfSeedsInSeedbox = $("#seedbox").find(".seed").length;

			expectSeedsCreated();		
			expect(amountOfSeedsInSeedbox).toEqual(amountOfSeeds);
		});
	});

});