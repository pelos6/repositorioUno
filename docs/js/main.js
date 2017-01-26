$(document).ready(

  function(){

    // Comprobar si estamos, al menos, 100 px por debajo de la posición top
    // para mostrar o esconder el botón
    $(window).scroll(function(){

      if ( $(this).scrollTop() > 100 ) {

        $('.arriba-link').fadeIn();

      } else {

        $('.arriba-link').fadeOut();

      }

    });

    // al hacer click, animar el scroll hacia arriba
    $('.arriba-link').click( function( e ) {

      e.preventDefault();
      $('html, body').animate( {scrollTop : 0}, 800 );

    });

  });
