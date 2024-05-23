import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarDetail from './components/BarDetail';
import ReservaDetail from './components/ReservaDetail';
import Login from './components/Login';
import BarList from './components/BarList';
import Register from './components/Register';
import ReservaList from './components/ReservaList';

function App() {

  useEffect(() => {
    console.log('hola');
  }, []);

  const handleLogin = () => {
    console.log('Pasa');
  };

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/bar" element={<BarList/>} />
            <Route path="/reserva" element={<ReservaList value={reservas}/>}/>
            <Route path="/bar/:id" element={<BarDetail />} />
            <Route path="/reserva/:id" element={<ReservaDetail />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;