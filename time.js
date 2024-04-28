function getTime() {
  fetch('https://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
      const horaActual = new Date(data.datetime);
      const horaFormatoLocal = horaActual.getHours();
      document.getElementById('current-time').textContent = horaActual.toLocaleTimeString();
      const smallImage = document.getElementById('small-image');
      const wave = document.getElementById('wave');
      // Cambiar el fondo de pantalla según la hora del día
      if (horaFormatoLocal >= 6 && horaFormatoLocal < 18) 
      {
          document.body.style.backgroundImage = "url('./Pictures/bg-image-daytime.jpg')";
          smallImage.src = "./Pictures/icon-sun.svg";
          wave.textContent = "GOOD MORNING, IT´S CURRENTLY";
      }

      else
      {
          document.body.style.backgroundImage = "url('./Pictures/bg-image-nighttime.jpg')";
          smallImage.src = "./Pictures/icon-moon.svg";
          wave.textContent = "GOOD NIGHT, IT´S CURRENTLY";
      }
    })
    .catch(error => console.error('Hubo un error al obtener la hora:', error));
}

// Llamar a la función getTime() inicialmente
getTime();

// Actualizar la hora cada segundo
setInterval(getTime, 1000);

