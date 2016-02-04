angular.module('starter.services', [])

.factory('GeneratedNumbers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var generatedNumbers = [{
    id: 0,
    lowRange: 0, //inclusive
    highRange: 100, //inclusive
    count: 3,
    algorithm: 'linear congruential generator'
  }];

  return {
    all: function() {
      return generatedNumbers;
    },
    remove: function(numberSequence) {
      generatedNumbers.splice(generatedNumbers.indexOf(numberSequence), 1);
    },
    removeAll: function() {
      generatedNumbers = [];
    }
  };
});
