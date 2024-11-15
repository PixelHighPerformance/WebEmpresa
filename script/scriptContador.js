// Función para animar los contadores
function animateCounter(id, start, end, duration) {
    // Obtiene el elemento HTML por su ID
    let obj = document.getElementById(id);
    
    // Inicializa la variable 'current' con el valor inicial (start)
    let current = start;
    
    // Calcula el rango de números entre el valor inicial y el valor final
    let range = end - start;
    
    // Determina el incremento, si el valor final es mayor que el inicial, se incrementa de 1, de lo contrario, se decrementa
    let increment = end > start ? 1 : -1;
    
    // Calcula el tiempo entre cada paso del contador en milisegundos
    let step = Math.abs(Math.floor(duration / range));
    
    // Inicia un intervalo que actualiza el contador en cada paso
    let timer = setInterval(() => {
        // Incrementa o decrementa el valor actual
        current += increment;
        
        // Actualiza el contenido del elemento HTML con el nuevo valor
        obj.textContent = current;
        
        // Verifica si el valor actual ha alcanzado el valor final
        if (current == end) {
            // Si ha llegado al final, limpia el intervalo para detener la animación
            clearInterval(timer);
        }
    }, step); // El intervalo se ejecuta cada 'step' milisegundos
}

// Llamar a la función para cada contador
animateCounter("trabajos-realizados", 0, 150, 2000); // Inicia el contador para 'trabajos-realizados' desde 0 hasta 150 en 2 segundos
animateCounter("clientes", 0, 300, 2000); // Inicia el contador para 'clientes' desde 0 hasta 300 en 2 segundos
animateCounter("empresas", 0, 50, 2000); // Inicia el contador para 'empresas' desde 0 hasta 50 en 2 segundos
