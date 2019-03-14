'use strict';

// const tabla = $('#tbl_editoriales tbody');


const input_filtro = document.querySelector('#txt_buscar_editorial');

let lista_editoriales = getLista_editoriales();


mostrar_datos();


input_filtro.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {

    let tabla = document.querySelector('#tbl_editoriales tbody');

    let filtro = input_filtro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < lista_editoriales.length; i++){


        if (lista_editoriales[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let editorial = tabla.insertRow();


            let codigo = editorial.insertCell();

            codigo.innerHTML = lista_editoriales[i]['codigo'];

            let nombre = editorial.insertCell();

            nombre.innerHTML = lista_editoriales[i]['nombre'];

            let pais = editorial.insertCell();

            pais.innerHTML = lista_editoriales[i]['pais'];

            editorial.insertAdjacentHTML('beforeend', `<td id="opciones${i}"><div class="awesome_images"><i class="far fa-eye"></i><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></td>`);

            codigo.classList.add('codigo');

            nombre.classList.add('nombre');

            pais.classList.add('pais');

            let opcion = document.getElementById(`opciones${i}`);

            opcion.classList.add('funcione_por_favor');
        }

    }

}



