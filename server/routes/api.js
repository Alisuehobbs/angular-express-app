var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

router.get('/', function(req, res, next) {
    knex('todo')
        .then(function(list) {
            res.json(list);
        })
});

router.get('/:id', function(req, res, next) {
    knex('todo')
        .where('id', req.params.id)
        .first()
        .then( function(item) {
          res.json(item)
        })
})

router.post('/', function(req, res, next) {
    knex('todo')
        .insert(req.body)
        .then(function(item) {
            res.json(item)
        })
})

router.put('/:id', function(req, res, next) {
    knex('todo')
        .where('id', req.params.id)
        .first()
        .update(req.body)
        .then(function (item) {
            res.json('Item updated')
        })
})

router.delete('/:id', function(req, res, next) {
    knex('todo')
        .where('id', req.params.id)
        .first()
        .del()
        .then( function() {
          res.json('item deleted')
        })
})

module.exports = router;
