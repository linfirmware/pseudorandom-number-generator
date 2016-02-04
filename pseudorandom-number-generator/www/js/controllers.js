angular.module('starter.controllers', [])

.controller('NumberGeneratorCtrl', function($scope, GeneratedNumbers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.count = {
  value: 150,
  options: {
    floor: 0,
    ceil: 450
  }
};

  $scope.range = {
    min: 100,
    max: 180,
    options: {
      floor: 0,
      ceil: 450
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
