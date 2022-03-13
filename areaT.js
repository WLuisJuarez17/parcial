const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/areatrabajo`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.descripcion}</li>-------------------------------------------------------------------`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});