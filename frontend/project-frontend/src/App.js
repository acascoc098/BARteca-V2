import './App.css';
import { useEffect, useState } from 'react';
import { getBares, getReservas } from './Api';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarDetail from './BarDetail';
import { DataScroller } from 'primereact/datascroller';
import Login from './Login';

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

  const itemTemplateB = (bar) => {
    return (
      <div className="col-12">
        <Link to={`/bar/${bar.id}`}>
          <div className="text-2xl font-bold text-900">{bar.nombre}</div>
        </Link>
      </div>
    );
  };
  
  const itemTemplateR = (reserva) => {
    return (
      <div className="col-12">
        <Link to={`/bar/${reserva.id}`}>
          <div className="text-2xl font-bold text-900">{reserva.fecha}</div>
        </Link>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            <Route path="/bar" element={<DataScroller value={bares} itemTemplate={itemTemplateB} rows={5} buffer={0.5} header='Bares' />} />
            <Route path="/reserva" element={<DataScroller value={reservas} itemTemplate={itemTemplateR} rows={5} buffer={0.5} header='Reserva' />} />
            <Route path="/bar/:id" element={<BarDetail />} />
            <Route path="/reserva/:id" element={<BarDetail />} />
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