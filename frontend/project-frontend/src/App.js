import logo from './logo.svg';
import './App.css';
import TemplateDemo from './components/TemplaceDemo';
import { useEffect, useState } from 'react';
import getBares from './Api';
import { DataScroller } from 'primereact/datascroller';


function App() {
  const [bares, setBares] = useState([]);
  const data = [];

  useEffect(() =>{
    getBares(setBares);
  },[]);

  const itemTemplate = (bar) => {
      return (
          <div className="col-12">
              <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                  <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                      <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                          <div className="flex flex-column gap-1">
                              <div className="text-2xl font-bold text-900">{bar.nombre}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  /**
   * <TemplateDemo prop={4}/>

      <DataScroller value={bares} itemTemplate={itemTemplate} rows={3} buffer={0.5} header='Bares'/>
   */

  return (
    <>
      <DataScroller value={bares} itemTemplate={itemTemplate} rows={5} buffer={0.5} header='Bares'/>
    </>
  );
}

export default App;
