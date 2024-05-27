import { useEffect, useState } from 'react';
import { getReserva } from '../Api/Api';
import { useParams } from 'react-router-dom';

function ReservaDetail() {
  const [reserva, setReserva] = useState(null);
  const reservaId = useParams();

  useEffect(() => {
    getReserva(reservaId.id, setReserva);
  }, [reservaId.id]);

  if (!reserva) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{reserva.usuario.nombre}</h1>
      <p>{reserva.bar.nombre}</p>
      <p>{reserva.comensales}</p>
      <p>{reserva.fecha}</p>
      <p>{reserva.hora}</p>
    </div>
  );
}

export default ReservaDetail;
