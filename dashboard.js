const myDashboard = angular.module('myDashboard', []);

myDashboard.controller('DashboardCtrl', ['$scope', function ($scope) {

  $scope.todos = [
    {text:'Prototype', done:false},
    {text:'Test', done:false}
  ]

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.clearCompleted = function () {
    $scope.todos = _.filter($scope.todos, function(todo) {
      return !todo.done;
    })
  };

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };

}]);
