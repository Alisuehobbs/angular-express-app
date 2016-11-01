var app = angular.module('todoApp', ['ngRoute'])

app.controller('TodoController', function($scope, TodoService) {

    $scope.items = [];

    TodoService.getList()
        .then(function(items) {
            $scope.items = items.data
        })

    $scope.submitItem = function(boolean) {
        if (boolean) {
            const addItem = $scope.item
            TodoService.postItem(addItem)
                .success(function(object, success) {
                    $scope.items.push(addItem)
                    $scope.item = {}
                    $scope.newItem.$setPristine()
                })
        }
    }
})

app.controller('itemController', function($scope, TodoService, $routeParams, $location) {

    const id = $routeParams.id

    $scope.item = {}

    TodoService.getOneItem(id)
        .then(function(oneItem) {
            $scope.item = oneItem.data
        })

    $scope.submitEditItem = function(item) {
        if (item) {
            const editedItem = $scope.item
            TodoService.putItem(editedItem)
            .then( function() {
              $location.url('/')
            })
        }
    }

    $scope.removeItem = function(item) {
      const id = item.id
      TodoService.deleteItem(id)
      .then(function() {
        $location.url('/')
      })
    }

})

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/list.html',
            controller: 'TodoController'
        })
        .when('/:id', {
            templateUrl: './views/item.html',
            controller: 'itemController'
        })
})
