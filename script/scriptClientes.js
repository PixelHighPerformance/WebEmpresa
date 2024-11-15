// Inicializa el índice del slide actual en 0
let currentSlide = 0;
// Variable para almacenar el intervalo del slide show
let slideInterval;

// Función para mostrar el slide correspondiente según el índice
function showSlide(index) {
    // Selecciona todos los elementos con la clase 'carousel-item'
    const slides = document.querySelectorAll('.carousel-item');
    
    // Lógica para reiniciar el índice si se supera la cantidad de slides
    if (index >= slides.length) {
        currentSlide = 0; // Reinicia a la primera diapositiva
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Va a la última diapositiva si el índice es negativo
    } else {
        currentSlide = index; // Establece el índice actual
    }
    
    // Calcula el desplazamiento en porcentaje basado en el índice actual
    const offset = -currentSlide * 100;
    
    // Aplica la transformación de desplazamiento a cada slide
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`; // Desplaza el slide actual fuera de la vista
    });
}

// Función para avanzar al siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1); // Muestra el siguiente slide
}

// Función para retroceder al slide anterior
function prevSlide() {
    showSlide(currentSlide - 1); // Muestra el slide anterior
}

// Función para iniciar la presentación de diapositivas
function startSlideShow() {
    // Establece un intervalo que cambia de slide cada 3 segundos (3000 ms)
    slideInterval = setInterval(nextSlide, 3000);
}

// Función para detener la presentación de diapositivas
function stopSlideShow() {
    clearInterval(slideInterval); // Limpia el intervalo para detener el cambio automático de slides
}

// Evento que se ejecuta cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Muestra el slide inicial
    startSlideShow(); // Inicia la presentación de diapositivas
    
    // Opcional: Detiene el desplazamiento automático al pasar el cursor sobre los botones
    document.querySelector('.prev').addEventListener('mouseover', stopSlideShow); // Detiene al pasar el mouse sobre el botón de retroceso
    document.querySelector('.next').addEventListener('mouseover', stopSlideShow); // Detiene al pasar el mouse sobre el botón de avance
    document.querySelector('.prev').addEventListener('mouseout', startSlideShow); // Reinicia al salir del mouse del botón de retroceso
    document.querySelector('.next').addEventListener('mouseout', startSlideShow); // Reinicia al salir del mouse del botón de avance
});
