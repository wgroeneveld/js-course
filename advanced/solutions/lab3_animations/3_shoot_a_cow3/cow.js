
var game = (function() {

	var score, intervalId;
	
	function start() {
		score = 0;
		$("#score").val(score);
		createCow();
		intervalId = setInterval(cowCheck, 1000);
	}
	
	function createCow() {
		$("<div id='cow'/>")
			.click(shotTheCow)
			.appendTo($('body'));
	}
	
	function randomPxWithinBounds()	{
		return Math.round(Math.random() * 500) + "px";
	}

	function updateScore(incr) {
		score += incr;
		$("#score").val(score);
	}
	
	function shotTheCow() {
		updateScore(1);
		$(this).css('background', 'url(\'res/explosion.jpg\') no-repeat');
		var width = $(this).css('width');
		var height = $(this).css('height');
		$(this).animate({
			opacity: 0.5,
			width: '100px',
			height: '100px',
		}, 500, function() {
			$(this)
				.hide()
				.css('opacity', 1)
				.css('width', width)
				.css('height', height);
		});
	}
	
	function cowCheck() {
		if($("#cow").is(":visible")) {
			updateScore(-1);
		}
		
		$("#cow")
			.css('background', 'url(\'res/cow.png\')')
			.css("top", randomPxWithinBounds())
			.css("left", randomPxWithinBounds())
			.toggle();
	}	
	
	function stop() {
		clearInterval(intervalId);
		$("#cow").remove();
	}

	return {
		start: start,
		stop: stop,
		getScore: function() { return score; }
	};

})();
