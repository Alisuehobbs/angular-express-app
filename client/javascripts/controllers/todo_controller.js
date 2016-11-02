app.controller('TodoController', function($scope, TodoService) {

    TodoService.getList()
        .then(function(items) {
            $scope.items = items.data
        })

    $scope.submitItem = function(boolean) {
        if (boolean) {
            const addItem = $scope.item
            TodoService.postItem(addItem)
                .then( function(newItem) {
                  const newItemData = newItem.data[0]
                    $scope.items.push(newItemData)
                    $scope.item = {}
                    $scope.newItem.$setPristine()
                })
        }
    }
})
