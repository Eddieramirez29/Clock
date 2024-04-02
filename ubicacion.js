// Dirección IP de ejemplo
const ipAddress = 'tu_direccion_ip';

// URL de la API de GeoIP
const apiUrl = `https://geoip.maxmind.com/geoip/v2.1/city/${ipAddress}?demo=1`;

// Realizar la solicitud HTTP GET
fetch(apiUrl, {
  headers: {
    'Authorization': 'Bearer tu_api_key' // Reemplaza 'tu_api_key' con tu propia clave de API si es necesario
  }
})
.then(response => response.json())
.then(data => {
  // Obtener la información de la ubicación
  const city = data.city.names.es;
  const region = data.subdivisions[0].names.es;
  const country = data.country.names.es;

  // Mostrar la información en la consola
  console.log('Ciudad:', city);
  console.log('Estado/Provincia:', region);
  console.log('País:', country);
})
.catch(error => console.error('Hubo un error al obtener la ubicación:', error));
