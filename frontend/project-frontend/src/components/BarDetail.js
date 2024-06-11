import { useEffect, useState } from 'react';
import { getBar, setBar } from '../Api/Api';
import { useNavigate, useParams } from 'react-router-dom';
import Calificacion from './Calificacion';
import './BarDetail.css';
import { Button } from 'primereact/button';

function BarDetail() {
  const navigate = useNavigate();

  const [bar, setBarr] = useState(null);
  const barId = useParams();

  console.log(barId.id);

  useEffect(() => {
    getBar(barId.id, setBarr);
    setBar(barId.id);
  }, [barId.id]);

  if (!bar) {
    return <div>Loading...</div>;
  }

  return (
    <div className='content'>
      <h1>{bar.nombre}</h1>
      <img src={bar.imagen} alt='Imagen del bar' width={200}/>
      <p>{bar.ciudad}, {bar.provincia}</p>
      <p>{bar.direccion}</p>
      <Calificacion value={bar.calificacion}/>
      Contacto:
      <p>{bar.correo}</p>
      <p>{bar.telefono}</p>
      <Button label="Hacer reserva" className='mt-2' text raised onClick={() => {navigate('/reservas/nueva')}}/>
    </div>
  );
}

export default BarDetail;
