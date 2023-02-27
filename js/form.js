document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573112259210";

  let cliente = document.querySelector("#cliente").value;
  let cedula = document.querySelector("#cedula").value;
  let ciudad = document.querySelector("#ciudad").value;
  let direccion = document.querySelector("#direccion").value;
  let color = document.querySelector("#color").value;
  let cantidad = document.querySelector("#cantidad").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_HOLA ELECTROREX_*%0A
		*quisiera agendar mi Smart Watch*%0A%0A
		*Nombre*%0A
		${cliente}%0A
		*cedula*%0A
		${cedula}%0A
		*ciudad*%0A
		${ciudad}%0A
		*direccion*%0A
		${direccion}%0A
		*color*%0A
		${color}%0A
    *cantidad*%0A
		${cantidad}%0A`;

  if (cliente === "" || cedula === "" || ciudad === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado satisfactoriamente tu solicitud, 
   ${cliente}`;

  window.open(url);
});
