const formulario = document.getElementById("formulario");
const listaClientes = document.getElementById("lista-clientes");

function guardarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;

  if (!nombre || !apellido || !telefono) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const cliente = {
    nombre,
    apellido,
    telefono,
  };

  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  clientes.push(cliente);

  localStorage.setItem("clientes", JSON.stringify(clientes));

  alert("Cliente guardado correctamente");

  limpiarFormulario();

  mostrarClientes();
}

function limpiarFormulario() {
  formulario.reset();
}

function mostrarClientes() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  listaClientes.innerHTML = "";

  clientes.forEach((cliente) => {
    const li = document.createElement("li");
    li.textContent = `${cliente.nombre} ${cliente.apellido} - ${cliente.telefono}`;
    listaClientes.appendChild(li);
  });
}

mostrarClientes();
