
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('sesion')
    .createTable( 'credenciales', function( t ) {

        // Primary Key
        t.bigIncrements('id');

        // Data
        t.integer('idTipoIdentificacion').notNullable();
        t.string('identificacion').notNullable().unique();
        t.string('primerNombre').notNullable();
        t.string('segundoNombre').notNullable();
        t.string('apellidoPaterno').notNullable();
        t.string('apellidoMaterno').notNullable();
        // t.string('email').notNullable().unique();
        // t.string('contrasena').notNullable();
        t.string('semilla').notNullable().unique();
        t.timestamp('fechaCaducidad').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencial').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('sesion')
            .dropTableIfExists( 'credenciales' );
};
