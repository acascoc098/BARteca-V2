import React from "react"
import { DataScroller } from 'primereact/datascroller';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBares } from '../Api/Api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import './BarList.css';
import Calificacion from "./Calificacion";

const BarList = () => {
    const [bares, setBares] = useState([]);

    useEffect(() => {
          getBares(setBares);
    }, []);

    const itemTemplateB = (bar) => {
        console.log(bar.id);
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <Link to={`/bar/${bar.id}`}>
                                    <div className="text-2xl font-bold text-900">{bar.nombre}</div>
                                </Link>
                                <Calificacion value={bar.calificacion}/>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        );
      };

    return (
        <DataScroller value={bares} itemTemplate={itemTemplateB} rows={5} buffer={0.5} header='Bares' />
    );

}

export default BarList;