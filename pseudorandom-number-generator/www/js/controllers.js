angular.module('starter.controllers', [])

.controller('NumberGeneratorCtrl', function($scope, $ionicScrollDelegate, GeneratedNumbers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.generator = {
    algorithm: "Linear Congruential Generator (Microsoft)"
  };

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
      floor: 0,
      ceil: 300
    }
  };

  $scope.$on('$ionicView.enter', function(e) {
    $scope.generatedNumbers = GeneratedNumbers.all();
  });

  $scope.generate = function() {
    var n = 20;
    if(GeneratedNumbers.size() == n)
    {
      GeneratedNumbers.remove(n-1); //remove extra history entry to make room for next item if at limit
    }
    
    GeneratedNumbers.add($scope.range.min, $scope.range.max, $scope.count.value, $scope.generator.algorithm);
    $ionicScrollDelegate.resize();
    alert($scope.settings.historyCount);
  };

  $scope.remove = function(numberSequence) {
    GeneratedNumbers.remove(numberSequence);
    $ionicScrollDelegate.resize();
  };
})

.controller('SettingsAboutCtrl', function($scope, $ionicScrollDelegate, GeneratedNumbers) {
  $scope.settings = {
    historyCount: 20
  };

  $scope.removeAds = function() {
    alert('remove ads');
  };

  $scope.clearHistory = function() {
    GeneratedNumbers.removeAll();
    $ionicScrollDelegate.resize();
  };
});
