var game = (function (){
	
	var intervalId;

	function startShooting() {
		function createCow() {
			$("<div id='cow'/>").appendTo($('body'));
		}
		
		function randomPxWithinBounds()	{
			return Math.round(Math.random() * 500) + "px";
		}
		
		function cowCheck() {
			$("#cow")
				.css("top", randomPxWithinBounds())
				.css("left", randomPxWithinBounds())
				.toggle();
		}
		
		createCow();
		intervalId = setInterval(cowCheck, 1000);
	}

	return {
		start: startShooting,
		stop: function () {
			clearInterval(intervalId);
			$('#cow').remove();
		}
	}
})();

