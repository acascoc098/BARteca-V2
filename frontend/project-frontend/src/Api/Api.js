import axios from 'axios';

const URL = 'http://localhost:8080/barteca';

const getBares = async (state) => {
  const token = localStorage.getItem('token'); // Obtener el token
  if (!token) {
    console.error('No token found, redirecting to login');
    window.location.href = "/";
    return;
  }

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
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
  }
};

const getBar = async (id, setState) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found, redirecting to login');
    window.location.href = "/";
    return;
  }

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
          window.location.href = "/";
      }
  }
};

const getReservas = async (state) => {
  const token = localStorage.getItem('token'); // Obtener el token
  if (!token) {
    console.error('No token found, redirecting to login');
    window.location.href = "/";
    return;
  }

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
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
  }
};

const getReserva = async (id, setState) => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found, redirecting to login');
    window.location.href = "/";
    return;
  }

  try {
      const req = await axios.get(`${URL}/reserva/${id}`, {
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
          window.location.href = "/";
      }
  }
};

const registerUser = async (data) => {
  try {
      const response = await axios.post(`${URL}/usuario`, data);
      console.log('Registro exitoso:', response.data);
  } catch (error) {
      console.error('Error registrando usuario:', error);
  }
};

export { getBares, getBar, getReservas, getReserva, registerUser };
