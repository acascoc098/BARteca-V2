import './App.css';
import { useEffect} from 'react';
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
import { useAuth } from './Context/AuthProvider';
import BardAdd from './components/BarAdd';
import ReservaAdd from './components/ReservaAdd';

function AppContent() {
  const navigate = useNavigate();
  const {logout} = useAuth();

    const items = [
        {
            icon: 'pi pi-shop',
            command: () => {
                navigate('/bares');
            }
        },{
            icon: 'pi pi-book',
            command: () => {
                navigate('/reservas');
            }
        },
        {
            icon: 'pi pi-sign-out',
            command: () => {
              logout();
              navigate('/');
            }
        }
    ];
    
    const items2 = [
        {
            icon: 'pi pi-angle-double-left',
            command: () => {
                navigate('/bares');
            }
        }
    ];
    
    const items3 = [
        {
            icon: 'pi pi-angle-double-left',
            command: () => {
                navigate('/reservas');
            }
        }
    ];

  useEffect(() => {
    console.log('hola');
  }, []);

  return (
    
      <div className="App">
        
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/bares" element={<div style={{ position: 'relative'}}>
                                          <BarList/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                          <SpeedDial model={items} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" buttonClassName="p-button-help" />
                                          <ScrollTop threshold={100} behavior="smooth" />
                                        </div>
                                        } />
            <Route path='/bares/nuevo' element={<BardAdd/>}/>
            <Route path="/reservas" element={<div style={{ position: 'relative'}}>
                                          <ReservaList/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                          <SpeedDial model={items} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" buttonClassName="p-button-help" />
                                          <ScrollTop threshold={100} behavior="smooth" />
                                        </div>
                                        }/>
            <Route path='/reservas/nueva' element={<ReservaAdd/>}/>
            <Route path="/bares/:id" element={<div style={{ position: 'relative'}}>
                                          <BarDetail/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                          <SpeedDial model={items2} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" buttonClassName="p-button-help" />
                                          <ScrollTop threshold={100} behavior="smooth" />
                                        </div>} />
            <Route path="/reservas/:id" element={<div style={{ position: 'relative'}}>
                                          <ReservaDetail/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                          <SpeedDial model={items3} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" buttonClassName="p-button-help" />
                                          <ScrollTop threshold={100} behavior="smooth" />
                                        </div>} />
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