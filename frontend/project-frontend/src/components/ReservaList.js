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
                <div className="flex flex-column xl:flex-row xl:align-items-center p-4 gap-4">
                    <div className="flex flex-column lg:flex-row justify-content-center align-items-center xl:align-items-center lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-center gap-3">
                            <div className="flex flex-column gap-1">
                                <Link to={`/reservas/${reserva.id}`}>
                                    <div className="text-2xl font-bold text-900">{reserva.bar.nombre}</div>
                                    <div className="text-2xl font-bold text-900">{reserva.fecha}</div>
                                    <div className="text-2xl font-bold text-900">{reserva.hora}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      };

    if (!reservas) {
      return <div>Loading...</div>;
    }

    return (
        <DataScroller value={reservas} itemTemplate={itemTemplate} rows={100} buffer={0.5} header='Reservas' />
    );

}

export default ReservaList;