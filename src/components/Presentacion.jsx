import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lucifer from '../img/lucifer_320.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/FTBDId0Ntc8YmJpolZe8fLJcoI.jpg"
          src={lucifer}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELVIS</h3>
          <p>La película explora la vida y la música de Elvis Presley</p>            
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg"
          src={lucifer}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SANDMAN</h3>
          <p>El señor de los sueños ha sido invocado y capturado por unos mortales. Cuando escape de su cautiverio, descubrirá que sus problemas no han hecho más que empezar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-120"
          // src="https://picsum.photos/400/100?random=3"
          // src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg"
          src={lucifer}
          alt="Third slide"                    
        />

        <Carousel.Caption>
          <h3>LUCIFER</h3>
          <p>
            La serie se centrará en Lucifer (Tom Ellis) quien, aburrido e infeliz como el Señor del Infierno, dimite de su trono y abandona su reino para trasladarse a la ciudad de Los Angeles y abrir un lujoso piano-bar llamado Lux
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;