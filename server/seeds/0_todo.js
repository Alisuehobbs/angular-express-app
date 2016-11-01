exports.seed = function(knex, Promise) {

    return knex('todo').del()
        .then(function() {
            return Promise.all([

                knex('todo').insert({
                    task: 'MAKE F*ING CHECKLIST',
                    status: 'Incomplete'
                }),

                knex('todo').insert({
                    task: 'CREATE F*ING APP IN LESS THAN 90 MIN',
                    status: 'Incomplete'
                })

            ]);
        });
};
