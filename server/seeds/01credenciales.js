
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sesion.credenciales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sesion.credenciales').insert([
        {
          idTipoIdentificacion: 1,
          identificacion: 1717171717,
          primerNombre: 'admin',
          segundoNombre: 'admin',
          apellidoPaterno: 'admin', 
          apellidoMaterno: 'admin',
          // email,
          // contraseña,
          semilla: '123456',
          fechaCaducidad: '9999-12-31',
          idEstadoRegistro: 2,
          idCredencial: 1
        }
      ]);
    });
};
