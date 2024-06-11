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

const getUser = async (username) => {
  //console.log(username);

  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found, redirecting to login');
    window.location.href = "/";
    return;
  }

  try {
      const req = await axios.get(`${URL}/usuario/username/${username}`, {
      headers: {
          'Authorization': `Bearer ${token}`
      },
      withCredentials: true
      });
      console.log(req);
      return req.data;
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

const nuevoBar = async (data) => {
  try {
      const response = await axios.post(`${URL}/bar`, data);
      console.log('Registro exitoso:', response.data);
  } catch (error) {
      console.error('Error registrando usuario:', error);
  }
};

const nuevaReserva = async (data) => {
  try {
      const response = await axios.post(`${URL}/reserva`, data);
      console.log('Registro exitoso:', response.data);
  } catch (error) {
      console.error('Error registrando usuario:', error);
  }
};

let bar = 0;

const setBar = (barId) => {
  bar = barId;
}

const getBarId = () => {
  return bar;
}

let username;

const setUsernamee = (usernameN) => {
  console.log(usernameN);
  username = usernameN;
  console.log(username);
}

const getUsername = () => {
  console.log(username);
  return username;
}

const getUsuarioId = async () => {
  let user = getUser(getUsername());
  console.log(user);
  return user.id;
}

export { getBares, getBar, getReservas, getReserva, registerUser, nuevoBar, nuevaReserva, setBar, getBarId, getUsuarioId, getUser, setUsernamee, getUsername };
