
exports.seed = function(knex, Promise) {
  return knex.schema.withSchema('sesion')
  .alterTable('credenciales', function(t) {
    t.foreign('idTipoIdentificacion')
     .references('id')
     .on('catalogo.tipoIdentificaciones')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idEstadoRegistro')
     .references('id')
     .on('catalogo.estadoRegistros')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idCredencial')
     .references('id')
     .on('sesion.credenciales')
     .onDelete('RESTRICT')
     .onUpdate('RESTRICT')
  });
};
