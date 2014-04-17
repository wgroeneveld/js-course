
var utils = (function() {

	var index = 0;

	function getGeneratedTweet() {
		index++;
		return	{
			from_user: "Frankie",
			profile_image_url: "res/avatar" + (index%10 + 1)  + ".jpg",
			created_at: index + "/12/2010",
			text: "This is tweet #" + index
		};
	}

	return {
		generateTweet: getGeneratedTweet,
		reset: function() {
			index = 0;
		}
	};

})();
