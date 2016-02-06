angular.module('starter.services', [])

.factory('Settings', function() {
 
  settings = {};
  settings.historyCount = 20;
  return settings;
})

.factory('GeneratedNumbers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var generatedNumbers = [];

  function pseudoRandomNumberGenerator(seed, low, high, number, algo) {
    var data = [];

    switch(algo)
    {
      case "Linear Congruential Generator (MS)":
        var a = 214013;
        var c = 2531011;
        var m = 2147483648;
        var x = seed; //seed with time

        for(var i = 0; i < number; i++)
        {
          x = (a * x + c) % m;
          var next = x >> 16;

          //put number into acceptable range
          next /= 32767;
          next *= (high - low);
          next = Math.round(next);
          next += low;

          data.push(next);
        }
        break;
      default:
        break;
    }

    return data;
  }

  return {
    all: function() {
      return generatedNumbers;
    },
    add: function(low, high, number, algo) {
      var seedRaw = new Date().getMilliseconds();
      var data = pseudoRandomNumberGenerator(seedRaw, low, high, number, algo); //generate random numbers here

      generatedNumbers.unshift({
        date: new Date(),
        time: new Date().getTime(),
        seed: seedRaw,
        lowRange: low, //inclusive
        highRange: high, //inclusive
        count: number,
        algorithm: algo,
        data: data.join(", ")
      });
    },
    remove: function(numberSequence) {
      generatedNumbers.splice(generatedNumbers.indexOf(numberSequence), 1);
    },
    removeAll: function() {
      generatedNumbers = [];
    },
    size: function() {
      return generatedNumbers.length;
    }
  };
});
