import React, { useEffect, useState } from "react"
import { DataScroller } from 'primereact/datascroller';
import { Link } from 'react-router-dom';
import { getReservas } from "../Api/Api";

import './ReservaList.css';

const ReservaList = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        getReservas(setReservas);
    }, []);

    const itemTemplate = (reserva) => {
        return (
          <div className="col-12">
            <Link to={`/bar/${reserva.id}`}>
              <div className="text-2xl font-bold text-900">{reserva.fecha}</div>
            </Link>
          </div>
        );
      };

    return (
        <DataScroller value={reservas} itemTemplate={itemTemplate} rows={5} buffer={0.5} header='Reservas' />
    );

}

export default ReservaList;