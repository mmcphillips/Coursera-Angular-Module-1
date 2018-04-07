;(function () {
  'use strict'

  angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
  LunchCheckController.$inject = ['$scope']

  function LunchCheckController ($scope) {
    $scope.placeholder = 'List comma separated dishes you usually have for lunch'
    $scope.button = 'Click after listing items'
    $scope.enjoy = 'Enjoy!'
    $scope.toomuch = 'Too much!'
    $scope.error = "please enter text first"

    $scope.checker = function () {
      //if input is whitespace throw error
      if ($scope.lunch.trim() == "") {
        $scope.message = $scope.error
      } else {
      //split list by commas, in order to measure list length. trim to remove whitespace.
        var itemList = $scope.lunch.split(',')
        var itemListCommas = itemList.filter(function (value) {
          return value.trim() !== ''
        })
        if (itemListCommas.length <= 3)
          $scope.message = $scope.enjoy
        else $scope.message = $scope.toomuch
      }
    }
  }
})()
