describe("twitter wall", function() {

	var wall;
	beforeEach(function() {
		wall = Object.create(twitter);
		$.fx.off = true;
	});

	afterEach(function() {
		utils.reset();
		$(".tweet").remove();
		$.fx.off = false;
	});

	it("should do an ajax call and parse results as tweets", function() {
		spyOn($, "ajax").andCallFake(function(params) {
			params.success({
				results: [
					utils.generateTweet(),
					utils.generateTweet()
				]
			});
		});
		wall.addTweets();
		expect($(".tweet").length).toBe(2);
		expect($(".tweet:first").html()).toContain("tweet #1");
		expect($(".tweet:first").next().html()).toContain("tweet #2");
	});
	
	it("should pass a since_id parameter the second time to block older tweets from appearing", function() {
		var caughtParams;
		spyOn($, "ajax").andCallFake(function(params) {
			caughtParams = params;
			params.success({ results: [	utils.generateTweet() ] });
		});
		wall.addTweets();
		waitsFor(function() {
			return caughtParams !== undefined;
		});
		wall.addTweets();
		
		runs(function() {
			expect(caughtParams.data.since_id).toEqual(2);
		});
	});

});