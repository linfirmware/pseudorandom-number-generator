angular.module('starter.controllers', [])

.controller('NumberGeneratorCtrl', function($scope, GeneratedNumbers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.count = {
    value: 10,
    options: {
      floor: 1,
      ceil: 100
    }
  };

  $scope.range = {
    min: 0,
    max: 255,
    options: {
      floor: -500,
      ceil: 500
    }
  };

  $scope.$on('$ionicView.enter', function(e) {
    $scope.generatedNumbers = GeneratedNumbers.all();
  });

  $scope.generate = function() {
    GeneratedNumbers.add();
  };

  $scope.remove = function(numberSequence) {
    GeneratedNumbers.remove(numberSequence);
  };
})

.controller('SettingsAboutCtrl', function($scope, GeneratedNumbers) {
  $scope.settings = {
    historyCount: 20
  };

  $scope.removeAds = function() {
    alert('remove ads');
  };

  $scope.clearHistory = function() {
    GeneratedNumbers.removeAll();
  };
});
