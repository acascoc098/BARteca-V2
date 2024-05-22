import axios from 'axios';

const URL = 'http://localhost:8080/barteca';

const getBares = async (state) => {
  const token = localStorage.getItem('token'); // Obtener el token
  try {
    const req = await axios.get(URL + '/bar', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    });
    console.log(req);
    state(req.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getBar = async (id, setState) => {
    const token = localStorage.getItem('token');
    try {
      const req = await axios.get(`${URL}/bar/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true
      });
      console.log(req);
      setState(req.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

export { getBares, getBar };
