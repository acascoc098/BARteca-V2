import './App.css';
import { useEffect, useReducer, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import BarDetail from './components/BarDetail';
import ReservaDetail from './components/ReservaDetail';
import Login from './components/Login';
import BarList from './components/BarList';
import Register from './components/Register';
import ReservaList from './components/ReservaList';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { ScrollTop } from 'primereact/scrolltop';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

//const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token, loginError: null };
        case 'LOGIN_FAILED':
            return { ...state, isAuthenticated: false, user: null, token: null, loginError: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null, token: null, loginError: null };
        case 'REGISTER_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token, loginError: null };
        case 'REGISTER_FAILED':
            return { ...state, isAuthenticated: false, user: null, token: null, loginError: action.payload };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

function AppContent() {
  const navigate = useNavigate();

  const initialState = {
      isAuthenticated: false,
      user: null,
      token: null,
      loginError: null
  };


  const [state, dispatch] = useReducer(authReducer, initialState);

  const toast = useRef(null);
    const items = [
        {
            //label: 'Upload',
            icon: 'pi pi-book',
            command: () => {
                navigate('/reservas');
            }
        },
        {
            //label: 'React Website',
            icon: 'pi pi-sign-out',
            command: () => {

              localStorage.removeItem('token');
              localStorage.removeItem('user');
              dispatch({ type: 'LOGOUT' });
              navigate('/');
            }
        }
    ];

  useEffect(() => {
    console.log('hola');
  }, []);

  const handleLogin = () => {
    console.log('Pasa');
  };

  return (
    
      <div className="App">
        
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/bares" element={<div style={{ position: 'relative'}}>
                                          <BarList/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                          <SpeedDial model={items} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" buttonClassName="p-button-help" />
                                          <ScrollTop threshold={100} behavior="smooth" />
                                        </div>
                                        } />
            <Route path="/reservas" element={<ReservaList/>}/>
            <Route path="/bares/:id" element={<BarDetail />} />
            <Route path="/reservas/:id" element={<ReservaDetail />} />
          </Routes>
        
      </div>
  );
}

function App() {
  return (
      <Router>
          <AppContent />
      </Router>
  );
}

export default App;