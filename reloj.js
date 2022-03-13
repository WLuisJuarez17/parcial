const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/controlhorario`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.fechamovimiento}-///${control.tipomovimiento}/// -${control.fechamovimiento}-${control.primerNombre} -${control.segundoNombre}-${control.primerApellido}-${control.segundoApellido}-${control.tipoJornada}</li>----------------------------------------------------------------------------------------------------------------------------------------`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});