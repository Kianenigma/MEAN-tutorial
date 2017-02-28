let todoApp = angular.module('todo-app', [])

todoApp.controller('todoCtrl', function ($scope) {
  $scope.test = 'hello angular'
})
