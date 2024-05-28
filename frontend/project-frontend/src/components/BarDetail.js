import { useEffect, useState } from 'react';
import { getBar } from '../Api/Api';
import { useParams } from 'react-router-dom';
import Calificacion from './Calificacion';
import './BarDetail.css';

function BarDetail() {
  const [bar, setBar] = useState(null);
  const barId = useParams();

  console.log(barId.id);

  useEffect(() => {
    getBar(barId.id, setBar);
  }, [barId.id]);

  if (!bar) {
    return <div>Loading...</div>;
  }

  return (
    <div className='content'>
      <h1>{bar.nombre}</h1>
      <img src={bar.imagen} width={200}/>
      <p>{bar.descripcion}</p>
      <Calificacion value={bar.calificacion}/>
      <p>{bar.correo}</p>
    </div>
  );
}

export default BarDetail;
