
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('catalogo')
    .createTable( 'tipoIdentificaciones', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencial').notNullable();
    })
    .createTable( 'estadoRegistros', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencial').notNullable();
    })
    .createTable( 'roles', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencial').notNullable();
    } )
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('catalogo')
        .dropTableIfExists( 'tipoIdentificaciones' )
        .dropTableIfExists( 'estadoRegistros' )
        .dropTableIfExists( 'roles' );
};
