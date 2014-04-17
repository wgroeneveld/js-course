$(function () {

    var game = DACTYLO.createGame({
        expectedCharacters: 'JavaScript is pure awesomeness!'
    });
	var timed, time, totalTime;

	function finished() {
		clearInterval(timed);
		$('#expectedCharacter').text('<The End>');
		var won = false;
		if(game.amountOfPenalties === 0) {
			won = true;
		}
		
		$("#amount").css("background-color", won ? "green" : "red").css("color", "white").css("font-size", "30pt");
	}
	
    $('#typedText').keypress(function (e) {
        game.type(String.fromCharCode(e.which));
    });

    game.addListener(function () {
		time = 2000;
		if(!timed) {
			timed = setInterval(function() {
				time -= 100;
				if(time <= 0) {
					time = 2000;
				}
				$("#timeLeft").html(time + " ms");
			}, 100);
		}
		
        $('#penalties').text(game.amountOfPenalties);
        $('#expectedCharacter').text(game.expectedCharacter() === ' '
                                     ? '<spatie>'
                                     : game.expectedCharacter());
        if(game.expectedCharacter() === '') {
			finished();
        }
    });

    $('#typedText').val('').attr('disabled',true);
    
    $('#start').click(function () {
        game.start();
        $('#typedText').attr('disabled',false).focus();
        $('#start').attr('disabled',true);
    });

});
