const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/empleado`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.primerNombre} -${control.segundoNombre}- ${control.primerApellido} - ${control.segundoApellido}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});
fetch(`${API_URL}/jornada`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.tipoJornada}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});
fetch(`${API_URL}/areatrabajo`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.descripcion}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});
fetch(`${API_URL}/trabajo`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.trabajodescripcion}-${control.primerNombre} -${control.segundoNombre}- ${control.primerApellido} - ${control.segundoApellido}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});
fetch(`${API_URL}/bitacora`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.Peticion}-${control.tabla} -${control.fechamovimiento}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});


