const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');    

fetch(`${API_URL}/actividades`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.descripcion}-${control.primerNombre} -${control.segundoNombre}-${control.primerApellido}-${control.segundoApellido}-${control.areaDescripcion}-${control.actividadescription}-${control.precio}</li>-------------------------------------------------------------------`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});