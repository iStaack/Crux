'use strict';


const input_filtrar = document.querySelector('#txt_buscar_libro');

let libros = getListaLibros();

mostrar_datos();

input_filtrar.addEventListener('keyup', mostrar_datos);

function mostrar_datos(){
        let tabla = document.querySelector('#tbody');

        let filtrar = input_filtrar.value;

        tabla.innerHTML = '';

        for (let i = 0; i < libros.length; i++){


        if (libros[i]['titulo'].toLowerCase().includes(filtrar.toLowerCase()) || libros[i]['editorial'].toLowerCase().includes(filtrar.toLowerCase())){
                if(libros[i]['isbn'] !== undefined
                    && libros[i]['titulo'] !== undefined
                    && libros[i]['categoria'] !== undefined
                    && libros[i]['editorial'] !== undefined
                    && libros[i]['autor'] !== undefined
                    && libros[i]['precio'] !== undefined
                    && libros[i]['portada'] !== undefined){

                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="isbn${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="titulo${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="categoria${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="editorial${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="autor${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="precio${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="portada${i}"></div>`);
                        tabla.insertAdjacentHTML('beforeend', `<div class="grid-item" id="opciones${i}"><div class="awesome_images"><i class="far fa-eye"></i><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></div>`);

                        let isbn = document.getElementById(`isbn${i}`);
                        let titulo = document.getElementById(`titulo${i}`);
                        let categoria = document.getElementById(`categoria${i}`);
                        let editorial = document.getElementById(`editorial${i}`);
                        let autor = document.getElementById(`autor${i}`);
                        let precio = document.getElementById(`precio${i}`);
                        let portada = document.getElementById(`portada${i}`);


                        let p1 = document.createElement('p');
                        let p2 = document.createElement('p');
                        let p3 = document.createElement('p');
                        let p4 = document.createElement('p');
                        let p5 = document.createElement('p');
                        let p6 = document.createElement('p');
                        let imagen = document.createElement('img');

                        if (libros[i]['portada'] || !(libros[i]['portada'] instanceof HTMLImageElement)){
                                imagen.src = libros[i]['portada'];
                        } else {
                                imagen.src = 'img/portada_en_blanco.png';
                        }

                        p1.innerHTML = libros[i]['isbn'];
                        p2.innerHTML = libros[i]['titulo'];
                        p3.innerHTML = libros[i]['categoria'];
                        p4.innerHTML = libros[i]['editorial'];
                        p5.innerHTML = libros[i]['autor'];
                        p6.innerHTML = libros[i]['precio'];
                        portada.appendChild(imagen);

                        let parrafo = isbn.getElementsByTagName('p')[6];
                        let url = portada.getElementsByTagName('img')[0];

                        isbn.insertBefore(p1,parrafo);
                        titulo.insertBefore(p2,parrafo);
                        categoria.insertBefore(p3,parrafo);
                        editorial.insertBefore(p4,parrafo);
                        autor.insertBefore(p5,parrafo);
                        precio.insertBefore(p6,parrafo);
                        portada.insertBefore(imagen,url);

                }
        }

    }
}