const token = 'f8bc1c28432648';

fetch(`https://ipinfo.io/json?token=${token}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data); // Imprime la respuesta completa para examinar su estructura
    
    const city = data.city;
    const state = data.region; // Accede al campo 'region' para obtener el estado
    const country = data.country;
    // const postalCode = data.postal;
    // const coordinates = data.loc ? data.loc.split(',') : null;
    

    document.getElementById('city').textContent = city;
    document.getElementById('state').textContent = state + ",";
    document.getElementById('country').textContent = country

  })
  .catch(error => console.error('Hubo un error al obtener la ubicación:', error));
