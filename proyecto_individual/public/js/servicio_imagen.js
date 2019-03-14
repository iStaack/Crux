$(function () {

    let imagenUrl = '';
    //Configure Cloudinary
    // con credenciales disponibles en
    // el dashboard de su cuenta
    $.cloudinary.config({ cloud_name: 'cmirandam', api_key: '457574259885822'});

    // Botón subir
    let boton_subir = $('#btn_seleccionar_imagen_portada');

    // Evento subir boton
    boton_subir.on('click', function (e) {
        //Inicialización subida
        cloudinary.openUploadWidget({ cloud_name: 'cmirandam', upload_preset: 'cmiranda', tags: ['cgal']},
        function (error, result) {
            if (error) console.log(error);

            // sin no hay error, pone la información de la imagen en la consola
            let id = result[0].public_id;
            console.log(id);
            imagenUrl = 'https://res.cloudinary.com/cmirandam/image/upload/' + id;
            document.querySelector('.imagen').src = imagenUrl;
            console.log(imagenUrl);
        });
    });
});



function processImage(id) {
    let options = {
        client_hints: true,
    };
    return $.cloudinary.url(id, options);
}