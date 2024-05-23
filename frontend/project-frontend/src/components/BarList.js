import React from "react"
import { DataScroller } from 'primereact/datascroller';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBares } from '../Api';

import './BarList.css';

const BarList = () => {
    const [bares, setBares] = useState([]);

    useEffect(() => {
          getBares(setBares);
    }, []);

    const itemTemplateB = (bar) => {
        return (
          <div className="col-12">
            <Link to={`/bar/${bar.id}`}>
              <div className="text-2xl font-bold text-900">{bar.nombre}</div>
            </Link>
          </div>
        );
      };

    return (
        <DataScroller value={bares} itemTemplate={itemTemplateB} rows={5} buffer={0.5} header='Bares' />
    );

}

export default BarList;