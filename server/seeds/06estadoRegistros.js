
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.estadoRegistros').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.estadoRegistros').insert([
        {
          descripcion: 'Reiniciar',
          idEstadoRegistro: 2,
          idCredencial: 1
        },
        {
          descripcion: 'Activo',
          idEstadoRegistro: 2,
          idCredencial: 1
        },
        {
          descripcion: 'Inactivo',
          idEstadoRegistro: 2,
          idCredencial: 1
        }
      ]);
    });
};
