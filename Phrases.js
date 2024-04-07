// Función para obtener y mostrar una cita aleatoria
function obtenerCitaAleatoria() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la cita');
            }
            return response.json();
        })
        .then(data => {
            const citaTexto = `${data.content} - ${data.author}`;
            document.getElementById('cita').textContent = citaTexto;
        })
        .catch(error => console.error('Error al obtener la cita:', error));
}

// Llamar a la función inicialmente para obtener la primera cita
obtenerCitaAleatoria();

// Actualizar la cita cada vez que se haga clic en un botón
document.getElementById('nueva-cita').addEventListener('click', obtenerCitaAleatoria);

