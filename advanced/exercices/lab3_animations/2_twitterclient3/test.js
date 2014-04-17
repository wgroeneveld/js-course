describe("twitter wall", function() {

	var wall;
	
	function addTwoTweets() {
		wall.addTweets([
			utils.generateTweet(),
			utils.generateTweet()
		]);	
	}
	
	beforeEach(function() {
		$.fx.off=true;
		wall = Object.create(twitter);
		addTwoTweets();
		
	});
	afterEach(function() {
		$.fx.off=false;
		$("#twitterContainer").children().remove();
		utils.reset();
	});
	
	function getTweet() {
		return $("#twitterContainer").find(".tweet:first");
	}
	
	describe("rotating tweets no the wall", function() {
		function tweetPostedOnWall(index) {
			return $("#twitterContainer").html().indexOf("tweet #" + index) > 0;
		}
	
		it("should rotate out oldest tweets when new ones come rolling in", function() {

			addTwoTweets();
			
			expect($(".tweet").length).toBe(3);
			expect(tweetPostedOnWall(1)).toBe(false);
			expect(tweetPostedOnWall(2)).toBe(true);
			expect(tweetPostedOnWall(3)).toBe(true);
			expect(tweetPostedOnWall(4)).toBe(true);
		
		});
		
		it("should append newest tweets in order", function() {

			addTwoTweets();
			
			var first = getTweet();
			expect(getTweet().html()).toContain("tweet #2");
			expect(getTweet().next().html()).toContain("tweet #3");
			expect(getTweet().next().next().html()).toContain("tweet #4");
		});
	});
	
	describe("twitter wall tests from lab 1", function() {
		it("should create a tweet div for each element in the array as child of the twitter container", function() {
			expect($("#twitterContainer").find(".tweet").length).toBe(2);
		});
				
		it("should create an image with url going to the profile image url in the tweet", function() {
			var tweet = getTweet();
			expect(tweet).toContain("img");
			expect(tweet.find("img").attr('src')).toContain("res/avatar");
		});
		
		it("should create a timestamp div child within the tweet stating the time posted", function() {
			var tweet = getTweet();
			expect(tweet).toContain(".timestamp");
			expect(tweet.find(".timestamp").html()).toContain("12/2010");
		});
		
		it("should contain the tweet text", function() {
			expect(getTweet().html()).toContain("tweet");
		});	
	});

});