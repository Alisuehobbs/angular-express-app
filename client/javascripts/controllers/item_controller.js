app.controller('ItemController', function($scope, TodoService, $routeParams, $location) {

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

    $scope.cancel = function() {
      $location.url('/')
    }

})
