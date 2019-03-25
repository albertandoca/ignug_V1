
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tipoIdentificaciones').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tipoIdentificaciones').insert([
        {
          descripcion: 'Cédula',
          idEstadoRegistro: 2,
          idCredencial: 1
        },
        {
          descripcion: 'Pasaporte',
          idEstadoRegistro: 2,
          idCredencial: 1
        },
        {
          descripcion: 'Carné Refugiado',
          idEstadoRegistro: 2,
          idCredencial: 1
        },
        {
          descripcion: 'Otro',
          idEstadoRegistro: 2,
          idCredencial: 1
        }
      ]);
    });
};