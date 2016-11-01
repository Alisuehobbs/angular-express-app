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

    $scope.removeItem = function(item) {
        console.log('item in app.js:', item);
        const id = item.id
        TodoService.deleteItem(id)
            .then(function() {
                var index = $scope.items.indexOf(item)
                console.log('index:', index);
                $scope.items.splice(index, 0)
            })
    }

    $scope.editedItem = {}


    $scope.submitEditItem = function(item) {
        if (item) {
            const editedItem = $scope.editedItem
            TodoService.putItem(editedItem)
                .then(function() {
                    console.log('almost there');
                    // $scope.items.splice(0, )
                })
        }
    }

})

app.controller('itemController', function($scope, TodoService, $routeParams) {

    const id = $routeParams.id

    TodoService.getOneItem(id)
        .then(function(oneItem) {
            $scope.item = oneItem.data
        })

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
