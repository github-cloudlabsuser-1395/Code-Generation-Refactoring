const API_KEY = 'dee318ff8a4f47ec7a0046b78b92be32'; // Reemplaza con tu clave de API
const CITY = 'Buenos Aires';
const LAT = -34.6037; // Latitud de Buenos Aires
const LON = -58.3816; // Longitud de Buenos Aires
const EXCLUDE = 'minutely,hourly'; // Partes a excluir (puedes ajustar según tus necesidades)


const axios = require('axios'); // Asegúrate de instalar axios con `npm install axios`

// URL de la API
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&exclude=${EXCLUDE}&appid=${API_KEY}`;

// Llamada a la API
axios.get(API_URL)
  .then(response => {
    console.log('Datos del clima:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener los datos del clima:', error);
  });
