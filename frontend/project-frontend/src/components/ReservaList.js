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
          <div>
            <Link to={`/reserva/${reserva.id}`}>
              <div>{reserva.fecha}</div>
            </Link>
          </div>
        );
      };

    return (
        <DataScroller value={reservas} itemTemplate={itemTemplate} rows={5} buffer={0.5} header='Reservas' />
    );

}

export default ReservaList;