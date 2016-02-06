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
      var next = generatedNumbers.length;

      generatedNumbers.unshift({
        id: next,
        lowRange: low, //inclusive
        highRange: high, //inclusive
        count: number,
        algorithm: algo
      });
    },
    remove: function(numberSequence) {
      generatedNumbers.splice(generatedNumbers.indexOf(numberSequence), 1);
    },
    removeAll: function() {
      generatedNumbers = [];
    }
  };
});
