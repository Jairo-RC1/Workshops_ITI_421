$(document).ready(function () {
  $(".ver-mas").click(function (e) {
    e.preventDefault();

    // Obtener el elemento full-content asociado a la noticia actual
    var fullContent = $(this).siblings(".full-content");

    // Ocultar todas las noticias completas excepto la actual
    $(".full-content").not(fullContent).addClass("d-none");

    // Mostrar o ocultar la noticia actual según su estado actual
    fullContent.toggleClass("d-none");

    // Ajustar el tamaño de la imagen de la tarjeta clicada
    var cardBody = $(this).closest(".card-body");
    cardBody.toggleClass("expanded-card");

    // Desplazarse a la posición de la tarjeta clicada
    $("html, body").animate(
      {
        scrollTop: cardBody.offset().top,
      },
      1000
    );
  });
});
