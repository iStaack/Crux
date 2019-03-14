'use strict';

let listarSucursales = () =>{
    let lista_sucursales = [];

    let request = $.ajax(
        {
            url: "http://localhost:4000/api/listar_sucursales",
            method: "GET",
            data: {},
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            async: false
        }

    );

    request.done(function (res) {
        lista_sucursales = res.sucursales;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_sucursales;
};

let registrarSucursal = (pcodigo, pnombre, ptelefono, pdireccion, pubicacion) =>{
     let request = $.ajax(
         {
             url: "http://localhost:4000/api/registrar_sucursal",
             method: "POST",
             data: {
                codigo: pcodigo,
                nombre: pnombre,
                telefono: ptelefono,
                direccion_exacta: pdireccion,
                ubicacion:  pubicacion
             },
             contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
             dataType: "json"
         }
     );

     request.done(function (msg) {
             swal.fire(
                 {
                     type: 'success',
                     title: 'Se registró con éxito la sucursal',
                     text: `La sucursal ${pnombre} cuyo código es ${pcodigo}`+
                         `, teléfono es ${ptelefono} y se encuentra en ${pdireccion} `+
                         `se registró exitosamente.`
                 }
             );
         }
     );
     
     request.fail(function (jqXHR, textStatus) {

     });
};