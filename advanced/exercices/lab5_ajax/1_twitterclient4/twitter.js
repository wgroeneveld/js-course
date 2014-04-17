
var twitter = (function() {

	var MAX_TWEETS = 3;

	function createAvatarImage(tweet) {
		return $("<img/>").attr("src", tweet.profile_image_url);
	}

	function fadeOutOldestTweetsIfThresholdReached(tweets) {
		var countedTweets = $(".tweet").length;
		if(countedTweets > MAX_TWEETS) {
			for(var i = 0; i < countedTweets - MAX_TWEETS; i++) {
				$($(".tweet")[i]).fadeOut("slow", function() {
					$(this).remove();
				});
			}
		}
	}
		
	function add(tweets) {		
		tweets.forEach(function(tweet) {			
			var div = $("<div class='tweet'/>").hide().html(tweet.from_user + " says " + tweet.text);
			var timestamp = $("<div class='timestamp'/>").html(tweet.created_at);
			createAvatarImage(tweet).prependTo(div);
			timestamp.appendTo(div);
			
			div.appendTo($("#twitterContainer"));
			div.fadeIn();
		});
		
		fadeOutOldestTweetsIfThresholdReached(tweets);
	}

	return {
		addTweets: function() { }
	};

})();
