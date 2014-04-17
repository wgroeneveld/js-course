var DACTYLO = (function() {
  
  function createGame(options) {
    var timer;
    return {
      amountOfPenalties: 0,
      addPenalty: function () {
        this.amountOfPenalties += 1;
      },
      start: function () {
        timer = setTimeout(this.addPenalty.bind(this), 2000);
      },
      stop: function () {
        clearTimeout(timer);
      },
      type: function (character) {
        this.stop();
        if (character !== options.expectedCharacter) {
          this.addPenalty();
        }
      }
    };
  }

  return {
    createGame: createGame
  };
}());
