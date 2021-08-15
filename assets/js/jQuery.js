// AJAX CON JQUERY Y JSON

// Creo las constantes para llamar los archivos JSON

const carteleraJSON = "../assets/JSON/cartelera.json"
const categoriasJSON = "../assets/JSON/categorias.json"

// Hago la funcion para que me cree por cada imagen del JSON un div con su clase, dentro del div padre para formar la cartelera de Inicio.
$.getJSON (carteleraJSON, function(resultado, estado){
    if (estado === "success") {
      // console.log(resultado);
      resultado.forEach(e => {
        $(".contenedorPeliculas").append(
          `<div class="caratulas">
           <img src="${e.imagen}">
           </div>`
        )
      });
    }
})

//Creo los botones para desplegar la lista de las categorias

$(".listaCategorias").prepend('<button class="btnCategoriaSeries">Series</button>')
$(".listaCategorias").prepend('<button class="btnCategoriaPelis">Peliculas</button>')

//Le asigno una función al boton de Peliculas para que muestre la lista y oculte la lista de Series
$(".btnCategoriaPelis").click(() => { 
  $.getJSON(categoriasJSON, function (resultado, estado) {
        if(estado === "success"){
          // console.log(resultado);
      resultado.forEach(e => {
        $(".listaCategorias").append(
                                        `<h4 class="listaPelis">${e.categoria}</h4>`
        )
      });
    }
  });
  $(".listaSeries").fadeOut("fast");
});

//Le asigno una función al boton de Series para que muestre la lista y oculte la lista de Peliculas
$(".btnCategoriaSeries").click(() => { 
  $.getJSON(categoriasJSON, function (resultado, estado) {
        if(estado === "success"){
          // console.log(resultado);
      resultado.forEach(e => {
        $(".listaCategorias").append(
                                        `<h4 class="listaSeries">${e.categoria}</h4>`
        )
      });
    }
  });
  $(".listaPelis").fadeOut("fast");
});




// EVENTOS DE JQUERY

// Creo un botón al final de la página para que el cliente acepte las noticias

$('.jQuery').append('<p id="parrafoRegistro">QUÉRES RECIBIR NUESTRAS NOVEDADES?</p>');
$('.jQuery').append('<button id="btnRegistro">Suscribirme</button>');

// Le asigno un evento al botón para que diga un mensaje cuando lo apreta y que lo mande también a session storage
$('#btnRegistro').on('click', () => {
  $('.jQuery').append('<p id="confirmarRegistro">Solicitud enviada.</p>');
  const registro = $('#confirmarRegistro').text();
  sessionStorage.setItem("Estado:", registro);  
});


// Funcion callback de slide con delay, para darle animación a la publicidad.
$("aside").slideUp(2000, function(){
  $("aside").slideDown(4000);
}).delay(1000); 







