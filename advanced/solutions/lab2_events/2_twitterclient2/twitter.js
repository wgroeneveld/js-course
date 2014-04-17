function generateTweets(tweets) {
	
	var container = $("#twitterContainer");
	tweets.forEach(function(tweet) {
		var div = $("<div class='tweet'/>").html(tweet.from_user + " says " + tweet.text);
		var img = $("<img/>")
			.attr("src", tweet.profile_image_url)
			.mouseover(function() {
				$(this).attr("src", "res/zombie.png");
			})
			.mouseout(function() {
				$(this).attr("src", tweet.profile_image_url)
			});
		var timestamp = $("<div class='timestamp'/>").html(tweet.created_at);
		img.prependTo(div);
		timestamp.appendTo(div);
		
		div.appendTo(container);
	});

}
