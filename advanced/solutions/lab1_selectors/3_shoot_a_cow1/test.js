describe("trying to get mad cow disease under control", function() {

	beforeEach(game.start);
	afterEach(game.stop);

	it("should make the cow appear when starting the game", function() {
		expect($("#cow")).toBeVisible();
	});
	
	it("when you stop the game, the cow should dissappear", function() {
		game.stop();
		expect($("#cow")).not.toBeVisible();
	});

	it("when you stop the game, the cow should not reappear after 1 second", function() {
		game.stop();
		waits(1100);
		runs(function() {
			expect($("#cow")).not.toBeVisible();
		});
	});

	describe("toggling the cow image visibility", function() {
		function cowHidden() {
			return $("#cow").is(":hidden") || $('#cow').length === 0;
		}
		function cowShown() {
			return $("#cow").is(":visible");
		}
		
		it("should disappear after waiting a bit", function() {
			waitsFor(cowHidden);
			
			runs(function() {
				expect($("#cow")).not.toBeVisible();
			});
		});
		
		it("should reappear after disappearing", function() {
			waitsFor(cowHidden);
			waitsFor(cowShown);
			
			runs(function() {
				expect($("#cow")).toBeVisible();
			});
		});	

			
		it("the cow should appear at random locations", function () {
			var originalPosition = $('#cow').offset();
			waitsFor(cowHidden);
			waitsFor(cowShown);
			
			runs(function() {
				expect($("#cow").offset()).not.toEqual(originalPosition);
			});
		});
	});
		
	it("should invade the body of the document and not somewhere else in the DOM tree", function() {
		expect($("body > #cow").length).toBe(1);
	});


});