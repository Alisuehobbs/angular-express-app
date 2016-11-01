'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('todo', (table) => {
        table.increments();
        table.string('task').notNullable();
        table.string('status').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('todo')
}
