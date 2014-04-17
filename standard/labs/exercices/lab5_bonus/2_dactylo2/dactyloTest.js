$(document).ready(function() {
    module("Typing 1 character");
    
	  test("Correct typing won't net you any penalties", function() {
		var game = DACTYLO.createGame({expectedCharacters:'b'});
		game.start();
		game.type('b');
		equal(game.amountOfPenalties, 0);
	  });

	  asyncTest("Correct typing stops the timer", function() {
		var game = DACTYLO.createGame({expectedCharacters:'b'});
		game.start();
		game.type('b');
		
		setTimeout(function () {
		  equal(game.amountOfPenalties, 0);
		  start();
		}, 2500);
	  });
	  
	  asyncTest("Typing too slow nets you 1 penalty", function() {
		var game = DACTYLO.createGame({expectedCharacters:'b'});
		game.start();

		setTimeout(function () {
		  equal(game.amountOfPenalties, 1);
		  start();
		}, 2500);
	  });

	  test("Typing the wrong character nets you 1 penalty", function() {
		var game = DACTYLO.createGame({expectedCharacters:'b'});
		game.start();
		game.type('a');
		equal(game.amountOfPenalties, 1);
	  });
	  
	  asyncTest("Typing the wrong character stops the timer", function() {
		var game = DACTYLO.createGame({expectedCharacters:'b'});
		game.start();
		game.type('a');
		equal(game.amountOfPenalties, 1);
		
		setTimeout(function () {
		  equal(game.amountOfPenalties, 1);
		  start();
		}, 2500);
	  });

    module("Expected characters");

    test("The expected character starts with the first character", function () {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        equal(game.expectedCharacter(), 'a');
    });

    test("The expected character moves one char to the right while typing", function () {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        equal(game.expectedCharacter(),'b');
    });
    
    test("The expected character moves after a timeout", function () {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        setTimeout(function () {
            equal(game.expectedCharacter(),'b');
            start();
        }, 2500);
    });
    
    test("The expected character on the end of the game is an empty string", function () {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        game.type('b');
        equal(game.expectedCharacter(), '');
    });
    
    module("Typing multiple characters");
    
    test("Correct typing multiple chars doesn't give you any penalties", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        game.type('b');
        equal(game.amountOfPenalties,0);
    });

    test("Mistyping the second char gives you one penalty", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        game.type('a');
        equal(game.amountOfPenalties,1);
    });
    
    asyncTest("Typing the second char too slow nets you one penalty", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        
        setTimeout(function () {
            equal(game.amountOfPenalties,1);
            start();
        }, 2500);
    });

    asyncTest("Correctly typing all chars stops the timer", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        game.type('b');
        
        setTimeout(function () {
            equal(game.amountOfPenalties,0);
            start();
        }, 2500);
    });
    
    asyncTest("Mistyping the second character stops the timer", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        game.type('a');
        game.type('a');
        equal(1, game.amountOfPenalties);
        
        setTimeout(function () {
            equal(game.amountOfPenalties,1);
            start();
        }, 2500);
    });

    asyncTest("No typing at all nets you a penalty for each character", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        game.start();
        
        setTimeout(function () {
            equal(game.amountOfPenalties,2);
            start();
        }, 4500);
    });

    module("Callbacks");

    test("The callback gets called when the game starts", function() {
        var game = DACTYLO.createGame({expectedCharacters:'a'});
        var called = false;
        game.addListener(function () {called = true;});
        game.start();
        ok(called);
    });

    test("The callback gets called when the game ends", function() {
        var game = DACTYLO.createGame({expectedCharacters:'a'});
        var calledOnTheEnd = false;
        game.addListener(function () {
            if (game.expectedCharacter() === '') {
                calledOnTheEnd = true;
            }
        });
        game.start();
        game.type('a');
        ok(calledOnTheEnd);
    });
    
    test("The callback gets called for each new expected character", function() {
        var game = DACTYLO.createGame({expectedCharacters:'ab'});
        var chars = '';
        game.addListener(function () {
            chars += game.expectedCharacter();
        });
        game.start();
        game.type('a');
        game.type('b');

        equal(chars,'ab');
    });
});
