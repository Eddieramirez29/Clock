const token = 'f8bc1c28432648';

fetch(`https://ipinfo.io/json?token=${token}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Imprime la respuesta completa para examinar su estructura
    
    const city = data.city;
    const state = data.region; // Accede al campo 'region' para obtener el estado
    const country = data.country;
    const postalCode = data.postal;
    const coordinates = data.loc ? data.loc.split(',') : null;
    
    console.log('Ciudad:', city);
    document.getElementById('city').textContent = city;
    console.log('Estado:', state);
    document.getElementById('state').textContent = state;
    console.log('País:', country);
    console.log('Código postal:', postalCode);
    console.log('Coordenadas:', coordinates);
  })
  .catch(error => console.error('Hubo un error al obtener la ubicación:', error));
