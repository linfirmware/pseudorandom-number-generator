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
      var data = [4,7,1,12234,2,3,45,2,3,34353,45,345,44]; //generate random numbers here

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
