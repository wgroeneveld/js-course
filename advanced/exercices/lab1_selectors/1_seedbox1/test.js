describe("the seedbox", function() {

	afterEach(cleanupSeeds);

	function expectSeedsCreated() {
		expect($(".seed").length).toBeGreaterThan(0);
	}

	it("should create a set amount of seed divs", function() {
		generateSeeds(13);		
		expect($(".seed").length).toBe(13);
	});
			
	it("should contain all seeds within the seedbox", function() {
		generateSeeds(9);
		var amountOfSeeds = $(".seed").length;
		var amountOfSeedsInSeedbox = $("#seedbox").find(".seed").length;

		expectSeedsCreated();		
		expect(amountOfSeedsInSeedbox).toEqual(amountOfSeeds);
	});

	describe("different seed types", function() {
		beforeEach(function() {
			generateSeeds(10);
		});
	
		it("should add exactly one random specific seed class to each created seed", function() {
			expectSeedsCreated();
			$(".seed").each(function() {
				var me = $(this);
				var classSet = me.hasClass("peashooter") || me.hasClass("pumpkin") || me.hasClass("cherrybomb");
				
				expect(classSet).toBe(true);
			});
		});
		
		it("should have at least one peashooter present in the seedbox", function() {
			expect($("#seedbox")).toContain(".peashooter");
		});
	
		it("should have at least one pumpkin present in the seedbox", function() {
			expect($("#seedbox")).toContain(".pumpkin");
		});
		
		it("should have at least one cherrybomb present in the seedbox", function() {
			expect($("#seedbox")).toContain(".cherrybomb");
		});
	});
	
});