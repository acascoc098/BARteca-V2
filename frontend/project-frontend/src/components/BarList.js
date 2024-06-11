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

    if (!bares) {
        return <div>Loading...</div>;
    }

    const itemTemplateB = (bar) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${bar.imagen}`} alt={bar.nombre} />
                                <Link to={`/bares/${bar.id}`}>
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
        <>
            <DataScroller value={bares} itemTemplate={itemTemplateB} rows={100} buffer={0.5} header='Bares' />
            
        </>
    );

}

export default BarList;