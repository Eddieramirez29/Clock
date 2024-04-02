function obtenerHora() {
    fetch('http://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(data => {
        const horaActual = new Date(data.datetime);
        const horaFormatoLocal = horaActual.toLocaleTimeString();
        document.getElementById('hora-actual').textContent = horaFormatoLocal;
      })
      .catch(error => console.error('Hubo un error al obtener la hora:', error));
  }

 // Llamar a la función obtenerHora() inicialmente
 obtenerHora();

 // Actualizar la hora cada segundo
 setInterval(obtenerHora, 1000);

