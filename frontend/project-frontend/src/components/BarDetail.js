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
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='content bar-detail'>
      <h1>{bar.nombre}</h1>
      <img src={bar.imagen} alt='Imagen del bar' className='bar-image'/>
      <p>{bar.ciudad}, {bar.provincia}</p>
      <p>{bar.direccion}</p>
      <Calificacion value={bar.calificacion}/>
      <div className='contact-info'>
        Contacto:
        <p>{bar.correo}</p>
        <p>{bar.telefono}</p>
      </div>
      <Button label="Hacer reserva" className='mt-2' text raised onClick={() => {navigate('/reservas/nueva')}}/>
    </div>
  );
}

export default BarDetail;
