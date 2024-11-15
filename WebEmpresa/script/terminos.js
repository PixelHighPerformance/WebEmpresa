// Escucha el evento 'DOMContentLoaded', que se dispara cuando el documento HTML ha sido completamente cargado y analizado.
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento modal por su ID 'termsModal'
    var modal = document.getElementById('termsModal');
    
    // Obtiene el botón de aceptación por su ID 'acceptTerms'
    var acceptButton = document.getElementById('acceptTerms');

    // Muestra el modal estableciendo su estilo de visualización a 'block'
    modal.style.display = 'block';

    // Cuando el usuario hace clic en el botón de aceptación, cierra el modal
    acceptButton.onclick = function() {
        // Establece el estilo de visualización del modal a 'none' para ocultarlo
        modal.style.display = 'none';
    }

    // Previene la interacción con el resto de la página hasta que se acepten los términos
    window.onclick = function(event) {
        // Si el clic no se realizó en el botón de aceptación, detiene la propagación del evento
        if (event.target !== acceptButton) {
            event.stopPropagation();
        }
    }
});
