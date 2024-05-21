import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
//import './TemplaceDemo.css';

/*div -> root
style="
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
"
*/
export default function TemplateDemo({prop}) {
    const [value, setValue] = useState(prop);
    const cancel = document.querySelector('.p-rating-cancel-item');

    if (cancel) {
        cancel.style.visibility = 'hidden';
    }
    
  return (
    <>
      <div className="card flex justify-content-center">
        <Rating
          value={value}
          readOnly
          onChange={(e) => setValue(e.value)}
          onIcon={
            <img
              src="https://cdn.icon-icons.com/icons2/281/PNG/256/Mayor-Beer-icon_30315.png"
              alt="custom-image-active"
              width="25px"
              height="25px"
            />
          }
          offIcon={
            <img
              src="https://cdn.icon-icons.com/icons2/1315/PNG/512/if-beergermanyoktoberfestnationeurope-2596560_86604.png"
              alt="custom-image"
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