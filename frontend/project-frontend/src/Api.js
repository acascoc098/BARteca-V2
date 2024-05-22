import axios from 'axios';

const URL = 'http://localhost:8080/barteca';

const getBares = async (state) => {
  const token = localStorage.getItem('token'); // Obtener el token del almacenamiento local
  try {
    const req = await axios.get(URL + '/bar', {
      headers: {
        'Authorization': `Bearer ${token}` // Añadir el token en el header de la solicitud
      },
      withCredentials: true // Incluir cookies en la solicitud
    });
    console.log(req);
    state(req.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getBares;
