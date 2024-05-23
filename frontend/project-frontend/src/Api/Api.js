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
      if (error.response && error.response.status === 401) {
          window.location.href = "/login";
      }
  }
};

const getReservas = async (state) => {
  const token = localStorage.getItem('token'); // Obtener el token
  try {
    const req = await axios.get(URL + '/reserva', {
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

const getReserva = async (id, setState) => {
    //const token = localStorage.getItem('token');
    //try {
        const req = await axios.get(`${URL}/reserva/${id}`);
        
        if (req.status === 200) {
            console.log(req);
            setState(req.data);
        } else {
            console.error('Error fetching data');
            /*if (error.response && error.response.status === 401) {
                window.location.href = "/login";
            }*/
        }
    
        //, {
        /*headers: {
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true
        });
        console.log(req);
        setState(req.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 401) {
            window.location.href = "/login";
        }
    }*/
};

export { getBares, getBar, getReservas, getReserva };
