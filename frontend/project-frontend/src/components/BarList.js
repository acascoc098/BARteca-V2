import React from "react"
import { DataScroller } from 'primereact/datascroller';
import { Link } from 'react-router-dom';

const BarList = ({ bares }) => {

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