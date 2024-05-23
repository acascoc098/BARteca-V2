import './App.css';
import { useEffect, useState } from 'react';
import { getBares, getReservas } from './Api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarDetail from './components/BarDetail';
import ReservaDetail from './components/ReservaDetail';
import Login from './components/Login';
import BarList from './components/BarList';
import Register from './components/Register';
import ReservaList from './components/ReservaList';

function App() {

  const [bares, setBares] = useState([]);
  const [reservas, setReservas] = useState([]);
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      //setIsAuthenticated(true);
      getBares(setBares);
      getReservas(setReservas);
    }
  }, []);

  const handleLogin = () => {
    //setIsAuthenticated(true);
    getBares(setBares);
    getReservas(setReservas);
  };

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/bar" element={<BarList value={bares}/>} />
            <Route path="/reserva" element={<ReservaList value={reservas}/>}/>
            <Route path="/bar/:id" element={<BarDetail />} />
            <Route path="/reserva/:id" element={<ReservaDetail />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
const itemTemplate = (bar) => {
    return (
      <div className="col-12">
        <Link to={`/bar/${bar.id}`}>
          <div className="text-2xl font-bold text-900">{bar.nombre}</div>
        </Link>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<DataScroller value={bares} itemTemplate={itemTemplate} rows={5} buffer={0.5} header='Bares' />} />
            <Route path="/bar/:id" element={<BarDetail />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
 */