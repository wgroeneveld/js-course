
var twitter = (function() {

	var MAX_TWEETS = 3;

	function createAvatarImage(tweet) {
		return $("<img/>").attr("src", tweet.profile_image_url);
	}

	function fadeOutOldestTweetsIfThresholdReached(container, tweets) {
		var existingTweetLength = container.find(".tweet").length;
		if(existingTweetLength + tweets.length > MAX_TWEETS) {
			for(var i = 1; i <= (existingTweetLength - tweets.length) + 1; i++) {
				container.find(".tweet:nth-child(" + i + ")").fadeOut("slow", function() {
					$(this).remove();
				});
			}
		}
	}
	
	function add(tweets) {
		var container = $("#twitterContainer");
		fadeOutOldestTweetsIfThresholdReached(container, tweets);
		
		tweets.forEach(function(tweet) {
			var div = $("<div class='tweet'/>").hide().html(tweet.from_user + " says " + tweet.text);
			var timestamp = $("<div class='timestamp'/>").html(tweet.created_at);
			createAvatarImage(tweet).prependTo(div);
			timestamp.appendTo(div);
			
			div.appendTo(container);
			div.fadeIn();
		});
	}

	return {
		addTweets: add
	};

})();
