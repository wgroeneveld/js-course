
var DACTYLO = (function () {
    
    function createGame(options) {
        var timer;
        var indexExpectedCharacter = 0;
        var callbacks = [];

        function notifyListeners() {
            callbacks.forEach(function (callback) {callback();});
        }
        
        return {
            amountOfPenalties: 0,
            addPenalty: function () {
                this.amountOfPenalties += 1;
                this.reset();
            },
            start: function () {
                timer = setTimeout(this.addPenalty.bind(this), 2000);
                notifyListeners();
            },
            reset: function () {
                clearTimeout(timer);
                indexExpectedCharacter++;
                if (indexExpectedCharacter < options.expectedCharacters.length) {
                    this.start();
                } else {
                    notifyListeners();
                }
            },
            type: function (karakter) {
                if (karakter !== this.expectedCharacter()) {
                    this.addPenalty();
                } else {
                    this.reset();
                }
            },
            expectedCharacter: function () {
                return options.expectedCharacters[indexExpectedCharacter] || '';
            },
            addListener: function (callback) {
                callbacks.push(callback);
            }
        };
    }

    return {
        createGame: createGame
    };
}());
