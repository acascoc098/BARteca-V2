import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import './TemplaceDemo.css';

function Calificacion (prop) {
    const [value, setValue] = useState(prop.value || 0);
    return (
    <>
      <div className="card flex justify-content-center">
        <Rating
          value={value}
          readOnly
          cancel={false}
          onChange={(e) => setValue(e.value)
          }
          onIcon={
            <img
              src="https://cdn.icon-icons.com/icons2/281/PNG/256/Mayor-Beer-icon_30315.png"
              alt="pulsado"
              width="25px"
              height="25px"
            />
          }
          offIcon={
            <img
              src="https://cdn.icon-icons.com/icons2/1315/PNG/512/if-beergermanyoktoberfestnationeurope-2596560_86604.png"
              alt="fuera"
              width="25px"
              height="25px"
            />
          }
        />
      </div>
      <p>{value}</p>
    </>
  );
}

export default Calificacion;