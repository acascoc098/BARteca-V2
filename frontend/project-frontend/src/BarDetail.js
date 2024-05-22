import { useEffect, useState } from 'react';
import { getBar } from './Api';

function BarDetail({ barId }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    getBar(barId, setBar);
  }, [barId]);

  if (!bar) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{bar.nombre}</h1>
      <p>{bar.descripcion}</p>
      <p>{bar.calificacion}</p>
      <p>{bar.correo}</p>
    </div>
  );
}

export default BarDetail;
