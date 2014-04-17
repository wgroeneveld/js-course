
var firstTweet = {
	from_user: "Jos",
	profile_image_url: "res/avatar1.png",
	created_at: "10/12/2010",
	text: "Howdy all, I'm new at Javascript but I think it's a highly respectable language!"
};

function generateTweetsWithHardcodedData() {
	generateTweets([firstTweet, {
			from_user: "Urbain",
			profile_image_url: "res/avatar2.jpg",
			created_at: "12/03/1999",
			text: "I think JS Sucks, it's not statically typed and I want autocompletion! *Whine*"	
		}, {
			from_user: "Yolanda",
			profile_image_url: "res/avatar3.jpg",
			created_at: "12/03/1990",
			text: "Wow, writing a language using Bison is so refershing! I advice everyone to do it once a week."	
		}
	]);
}

describe("twitter wall", function() {

	beforeEach(generateTweetsWithHardcodedData);
	afterEach(function() {
		$("#twitterContainer").children().remove();
	});
	
	function getTweet() {
		return $("#twitterContainer").find(".tweet:first");
	}

	describe("twitter wall zombified avatars", function() {
		var zombieUrl = "res/zombie.png";
		it("should change the image url into the zombie picture while mouse hovering", function() {
			var img = getTweet().find("img");
			img.trigger("mouseover");
			expect(img).toHaveAttr("src", zombieUrl);
		});
		
		it("should not change another avatar when hovering above the first one", function() {
			getTweet().find("img").trigger("mouseover");
			expect($(".tweet:nth-child(2) img")).not.toHaveAttr("src", zombieUrl);
		});
		
		it("should revert to the default url when the mouse leaves the avatar", function() {
			var img = getTweet().find("img");
			img.trigger("mouseover");
			img.trigger("mouseout");
			
			expect(img).toHaveAttr("src", firstTweet.profile_image_url);
		});
	});
	
	describe("twitter wall tests from lab 1", function() {
		it("should create a tweet div for each element in the array as child of the twitter container", function() {
			expect($("#twitterContainer").find(".tweet").length).toBe(3);
		});
				
		it("should create an image with url going to the profile image url in the tweet", function() {
			var tweet = getTweet();
			expect(tweet).toContain("img");
			expect(tweet.find("img")).toHaveAttr("src", firstTweet.profile_image_url);
		});
		
		it("should create a timestamp div child within the tweet stating the time posted", function() {
			var tweet = getTweet();
			expect(tweet).toContain(".timestamp");
			expect(tweet.find(".timestamp")).toHaveText(firstTweet.created_at);
		});
		
		it("should contain the tweet text", function() {
			expect(getTweet().html()).toContain(firstTweet.from_user + " says " + firstTweet.text);
		});	
	});

});