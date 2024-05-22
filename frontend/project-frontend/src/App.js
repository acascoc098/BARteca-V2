import './App.css';
import { useEffect, useState } from 'react';
import getBares from './Api';
import { DataScroller } from 'primereact/datascroller';
import Login from './Login';

function App() {
  const [bares, setBares] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      getBares(setBares);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    getBares(setBares);
  };

  const itemTemplate = (bar) => {
    return (
      <div className="col-12">
        <div className="text-2xl font-bold text-900">{bar.nombre}</div>
      </div>
    );
  };

  return (
    <>
      {isAuthenticated ? (
        <DataScroller value={bares} itemTemplate={itemTemplate} rows={5} buffer={0.5} header='Bares' />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
