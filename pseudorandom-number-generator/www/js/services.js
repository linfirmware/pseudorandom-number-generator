angular.module('starter.services', [])

.factory('GeneratedNumbers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var generatedNumbers = [];

  return {
    all: function() {
      return generatedNumbers;
    },
    add: function(low, high, number, algo) {
      var a = 214013;
      var c = 2531011;
      var m = 2147483648;
      var x = new Date().getTime(); //seed with time

      var data = []; //generate random numbers here

      for(var i = 0; i < number; i++)
      {
        x = (a * x + c) % m;
        var next = x >> 16;

        //put number into acceptable range
        next /= 32767;
        next *= (high - low);
        next += low;

        data.push(next);
      }

      generatedNumbers.unshift({
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
