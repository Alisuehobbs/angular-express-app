app.factory('TodoService', function ($http) {
  return {
    getList: function() {
      return $http.get('/api/todo');
    },
    postItem: function(item) {
      return $http.post('/api/todo', item)
    },
    deleteItem: function(id) {
      console.log('id in delete in service:', id);
      return $http.delete(`/api/todo/${id}`)
    },
    getOneItem: function(id) {
      return $http.get(`/api/todo/${id}`)
    },
    putItem: function(editedItem) {
      const id = editedItem.id
      return $http.put(`/api/todo/${id}`, editedItem)
    }
  }
})
