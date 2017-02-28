let todoApp = angular.module('todo-app', [])

todoApp.controller('todoCtrl', function ($scope, $http) {
  $scope.submit = function () {
    let newTask = $scope.newTask
    $http.post('/task', {title: newTask})
    .then(
      (resp) => {
        $scope.tasks.push({title: newTask, done: false, _id: resp.data.taskId })
        $scope.newTask = ''
      },
      (resp) => { alert('error while adding task') }
    )
  }

  $scope.delete = function (taskId) {
    $http.delete('/task/' + taskId)
    .then(
      (resp) => {
        let index = $scope.tasks.filter((o) => o._id === taskId)[0]._id
        console.log(index)
        $scope.tasks.splice(index, 1)
      },
      (resp) => { alert('error while deleting task') }
    )
  }

  $http.get('/task')
  .then(
    (resp) => {
      $scope.tasks = resp.data
    },
    (resp) => {}
  )
})
