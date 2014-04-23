describe("dactylo game", function() {

  it("Correct typing won't net you any penalties", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('b');
    expect(spel.amountOfPenalties).toBe(0);
  });

  it("Correct typing stops the timer", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('b');
    
    waits(2500);
    runs(function() {
      expect(spel.amountOfPenalties).toBe(0);
    });
  });
  
  it("Typing too slow nets you 1 penalty", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();

    waits(2500);
    runs(function () {
      expect(spel.amountOfPenalties).toBe(1);
    });
  });

  it("Typing the wrong character nets you 1 penalty", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('a');
    expect(spel.amountOfPenalties).toBe(1);
  });
  
  it("Typing the wrong character stops the timer", function() {
    var spel = DACTYLO.createGame({expectedCharacter:'b'});
    spel.start();
    spel.type('a');
    expect(spel.amountOfPenalties).toBe(1);

    waits(2500);
    runs(function () {
      expect(spel.amountOfPenalties).toBe(1);
    });
  });

  
});
