var app = angular.module('todoApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/list.html',
            controller: 'TodoController'
        })
        .when('/:id', {
            templateUrl: './views/item.html',
            controller: 'ItemController'
        })
})
