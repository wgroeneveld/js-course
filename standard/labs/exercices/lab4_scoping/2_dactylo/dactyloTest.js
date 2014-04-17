$(document).ready(function() {

  test("Correct typing won't net you any penalties", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('b');
    equal(spel.amountOfPenalties, 0);
  });

  asyncTest("Correct typing stops the timer", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('b');
    
    setTimeout(function () {
      equal(spel.amountOfPenalties, 0);
      start();
    }, 2500);
  });
  
  asyncTest("Typing too slow nets you 1 penalty", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();

    setTimeout(function () {
      equal(spel.amountOfPenalties, 1);
      start();
    }, 2500);
  });

  test("Typing the wrong character nets you 1 penalty", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('a');
    equal(spel.amountOfPenalties, 1);
  });
  
  asyncTest("Typing the wrong character stops the timer", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('a');
    equal(spel.amountOfPenalties, 1);
    
    setTimeout(function () {
      equal(spel.amountOfPenalties, 1);
      start();
    }, 2500);
  });

  
});
