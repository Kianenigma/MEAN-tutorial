let todoApp = angular.module('todo-app', [])

todoApp.controller('todoCtrl', function ($scope) {
  // wtf is $scope? make sure to understand it properly

  $scope.test = 'hello angular'

  // testing ng-model
  $scope.formData = 'yo'

  // functions and clicks
  $scope.aFunc = function (param1, param2) {
    alert('i was called')
  }
  $scope.giveMeSomething = function () {
    return 'booo'
  }

  // iterations
  $scope.list = [
    {name: 'kian', id: 92521052 },
    {name: 'asqar', id: 92521044 },
    {name: 'qolam', id: 92521034 }
  ]
})
