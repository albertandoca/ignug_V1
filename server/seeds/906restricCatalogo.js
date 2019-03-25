
exports.seed = function(knex, Promise) {
  return knex.schema.withSchema('catalogo')
  .alterTable('tipoIdentificaciones', function(t) {
     t.foreign('idCredencial')
     .references('id')
     .on('sesion.credenciales')
     .onDelete('RESTRICT')
     .onUpdate('RESTRICT')
  })
  .alterTable('estadoRegistros', function(t) {
    t.foreign('idCredencial')
    .references('id')
    .on('sesion.credenciales')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
 })
 .alterTable('roles', function(t) {
    t.foreign('idCredencial')
    .references('id')
    .on('sesion.credenciales')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  });
};
