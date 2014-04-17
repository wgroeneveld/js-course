describe("trying to get mad cow disease under control", function() {

	beforeEach(function() {
		game.start();
	});
	afterEach(function() {
		game.stop();
	});

	function cowHidden() {
		return $("#cow").is(":hidden") || $('#cow').length === 0;
	}
	function cowShown() {
		return $("#cow").is(":visible");
	}	
	
	describe("game mechanics", function() {
		beforeEach(function() {
			game.stop();
		});
	
		it("should stop the interval and thus score counting when the game has been stopped", function() {
			waits(2000);
			
			runs(function() {
				expect(game.getScore()).toBe(0);
			});
		});
		
		it("should hide the cow when the game has been stopped", function() {
			expect($("#cow")).not.toBeVisible();
		});

		
	});
	
	describe("measuring the score", function() {
		it("should start with zero score on the game", function() {
			expect(game.getScore()).toBe(0);
		});
		
		it("should start with zero score in the score input field", function() {
			expect($('#score').val()).toBe("0");
		});
		
		it("should increase the score when I shot the cow on time", function() {
			$("#cow").trigger("click");
			expect(game.getScore()).toBe(1);
			expect($('#score').val()).toBe("1");
		});
		
		it("should have a total score of 2 when I've shot the cow twice in a row", function() {
			$("#cow").trigger("click");
			waitsFor(cowShown);
			$("#cow").trigger("click");
			
			expect(game.getScore()).toBe(2);
		});
		
		it("should decrease the score when I was too slow", function() {
			waitsFor(cowHidden);
			
			runs(function() {
				expect(game.getScore()).toBe(-1);
				expect($('#score').val()).toBe("-1");
			});
		});

		it("when starting a new game, the score should start from 0", function () {
			$("#cow").trigger("click");
			game.stop();
			game.start();
			expect(game.getScore()).toBe(0);
			expect($('#score').val()).toBe("0");
		});
	});
	
	describe("shoot a cow tests from lab 1", function() {
	
		it("should make the cow appear when firing the start shooting method", function() {
			expect($("#cow")).toBeVisible();
		});
		
		describe("toggling the cow image visibility", function() {			
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
		});
			
		it("should invade the body of the document and not somewhere else in the DOM tree", function() {
			expect($("body").find("#cow").length).toBe(1);
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
});