'use strict';

module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/todo_test'
    },
    development: {
      client: 'pg',
      connection: 'postgres://localhost/todo_development'
    },
    production: {
	  client: 'pg',
	  connection: process.env.DATABASE_URL
	}
};
