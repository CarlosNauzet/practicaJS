// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id, callback) {
  setTimeout(() => {
    let usuario;
    if (id === 1) {
      usuario = { id: 1, nombre: "John Doe" };
    }
    callback(usuario); //Hacemos una llamada al callback para obtener el resultado
  }, 2000);
}
obtenerUsuario(1, function (usuario) {
  console.log(usuario);
});
