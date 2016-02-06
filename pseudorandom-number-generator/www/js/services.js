angular.module('starter.services', [])

.factory('GeneratedNumbers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var generatedNumbers = [];

  return {
    all: function() {
      return generatedNumbers;
    },
    add: function() {
      var next = generatedNumbers.length;

      generatedNumbers.unshift({
        id: next,
        lowRange: 0, //inclusive
        highRange: 100, //inclusive
        count: 3,
        algorithm: 'linear congruential generator'
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
