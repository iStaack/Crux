'use strict';

let lista_sucursales = listarSucursales();
const input_filtrar = document.querySelector('#txt_buscar_sucursal');

mostrar_datos();

input_filtrar.addEventListener('keyup', mostrar_datos);

function mostrar_datos (){

    let tabla = document.querySelector('#tbody');

    let filtro = input_filtrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++){

        if (lista_sucursales[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            if(lista_sucursales[i]['codigo'] !== undefined
                && lista_sucursales[i]['nombre'] !== undefined
                && lista_sucursales[i]['telefono'] !== undefined
                && lista_sucursales[i]['direccion_exacta'] !== undefined
                && lista_sucursales[i]['ubicacion'] !== undefined){

                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="codigo${i}"></div>`);
                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="nombre${i}"></div>`);
                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="telefono${i}"></div>`);
                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="direccion_exacta${i}"></div>`);
                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="ubicacion${i}"></div>`);
                tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="opciones${i}"><div class="awesome_images"><i class="far fa-eye"></i><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div>`);

                let codigo = document.getElementById(`codigo${i}`);
                let nombre = document.getElementById(`nombre${i}`);
                let telefono = document.getElementById(`telefono${i}`);
                let direccion_exacta = document.getElementById(`direccion_exacta${i}`);
                let ubicacion = document.getElementById(`ubicacion${i}`);

                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let imagen = document.createElement('img');

                if (lista_sucursales[i]['ubicacion'] || !(lista_sucursales[i]['ubicacion'] instanceof HTMLImageElement)){
                    imagen.src = lista_sucursales[i]['ubicacion'];
                } else {
                    imagen.src = 'img/imagen_ubicacion.2.jpg';
                }

                p1.innerHTML = lista_sucursales[i]['codigo'];
                p2.innerHTML = lista_sucursales[i]['nombre'];
                p3.innerHTML = lista_sucursales[i]['telefono'];
                p4.innerHTML = lista_sucursales[i]['direccion_exacta'];
                ubicacion.appendChild(imagen);

                let parrafo = codigo.getElementsByTagName('p')[5];
                let url = ubicacion.getElementsByTagName('img')[0];

                codigo.insertBefore(p1,parrafo);
                nombre.insertBefore(p2,parrafo);
                telefono.insertBefore(p3,parrafo);
                direccion_exacta.insertBefore(p4,parrafo);
                ubicacion.insertBefore(imagen,url);

            }
        }

    }
}
