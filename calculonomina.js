

const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');
// //post
function data(mes,anio){
    this.mes = mes,
    this.anio = anio
}

let dataAdd =[]

function create(){
    const inputPN = document.getElementById("inputNameOne");
    const valorPN = (inputPN.value);
    const inputSN = document.getElementById("inputNameTw");
    const valorSN = (inputPN.value);

    dataAdd.push(new data(data.mes = valorPN, data.anio = valorSN));

}

// function clean(){
//     empleadoAdded.splice(0, empleadoAdded.length);
// }

const but = document.getElementById('buts')

but.addEventListener('click', () => {

//     const newPost = {
//         body: {
//             Mes: data.mes,
//             Anio: data.anio
//     }
// }

    fetch(`${API_URL}/calculonomina`, {
        method: 'POST',
        headers: 
        {
            'Content-type': 'application/jason',
        },
        body: JSON.stringify({Mes: data.mes,
                        Anio: data.anio})

    }).then((response) => response.json()).then((controles) => {
        const tpl = controles.map((control) => `<li> ${control.Nombre} -${control.Trabajo}-${control.Mes}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
    });

    fetch(`${API_URL}/calculonomina`,{
        method: 'GET',
        headers: 
        {
            'Content-type': 'application/jason',
        },
        body: JSON.stringify({Mes: data.mes,
                        Anio: data.anio})

    }).then((response) => response.json()).then((controles) => {
        const tpl = controles.map((control) => `<li> ${control.Nombre} -${control.Trabajo}-${control.Mes}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
    });

})

// const but2 = document.getElementById('buts2')

// but2.addEventListener('click', () => {

    // fetch(`${API_URL}/calculonomina`).then((response) => response.json()).then((controles) => {
    //     const tpl = controles.map((control) => `<li> ${control.Nombre} -${control.Trabajo}-${control.Mes}</li>`);
    //     HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
    // });             
    
// })
