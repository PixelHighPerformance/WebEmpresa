const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal', // Dirección horizontal
    loop: true, // Activar loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Hacer que los puntos de paginación sean clicables
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, // Tiempo de retardo entre transiciones (en ms)
      disableOnInteraction: false, // Autoplay no se desactiva después de la interacción del usuario
    },
  });

  