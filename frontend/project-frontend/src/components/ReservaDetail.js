import { useEffect, useState } from 'react';
import { getReserva } from '../Api/Api';
import { Link, useParams } from 'react-router-dom';

function ReservaDetail() {
  const [reserva, setReserva] = useState(null);
  const reservaId = useParams();

  useEffect(() => {
    getReserva(reservaId.id, setReserva);
  }, [reservaId.id]);

  if (!reserva) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='content reserva-detail'>
      <h1>{reserva.usuario.nombre}</h1>
      <Link to={`/bares/${reserva.bar.id}`}>
        <div>{reserva.bar.nombre}</div>
      </Link>
      <p>{reserva.comensales}</p>
      <p>{reserva.fecha}</p>
      <p>{reserva.hora}</p>
    </div>
  );
}

export default ReservaDetail;
