import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarDetail from './components/BarDetail';
import ReservaDetail from './components/ReservaDetail';
import Login from './components/Login';
import BarList from './components/BarList';
import Register from './components/Register';
import ReservaList from './components/ReservaList';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

function App() {

  useEffect(() => {
    console.log('hola');
  }, []);

  const handleLogin = () => {
    console.log('Pasa');
  };

  return (
    
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/bar" element={<BarList/>} />
            <Route path="/reserva" element={<ReservaList/>}/>
            <Route path="/bar/:id" element={<BarDetail />} />
            <Route path="/reserva/:id" element={<ReservaDetail />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;