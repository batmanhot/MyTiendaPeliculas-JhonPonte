import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import lucifer from '../img/lucifer.jpg';
import sandman from '../img/sandman.jpg';
import maverick from '../img/maverick.jpg';
import mujermaravilla from '../img/La Mujer Maravilla.jpg'

const items = [
  {    
    // src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    src: (lucifer),
    altText: 'Slide 1',
    caption: 'LUCIFER',
    caption_2: 'NRO.1'
  },
  {    
    src: (maverick),
    altText: 'Slide 2',
    caption: 'TOPGUN MAVERICK',
    caption_2: 'NRO.2'
  },
  {   
    src: (sandman),
    altText: 'Slide 3',
    caption: 'SANDMAN',
    caption_2: 'NRO.3'
  }
];

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>                    

            {/* <img src={item.src} alt={item.altText}  style={{display: 'flex', width: '25rem', height: '30%', margin: '0 auto', overflow: 'hidden',  justifycontent: 'center'}}/> */}

            {/* // Carrousel de Varias Imagenes */}
            <div className="col-sm-12">
                <div className="card bg-dark text-white" >
                    <h5 className="card-header text-center bg-secondary text-white">LAS MEJORES CRITICAS DEL AÑO</h5>
                    <div className="card-body" >    
                        
                        <div className="m-0 row justify-content-center">
                            {/* bg-warning text-dark p-2 text-center */}
                            <div className="col-auto text-dark p-2 text-center ">                          
                                <img className="imgCuadrado img-thumbnail img-responsive" 
                                     src={maverick} alt="Primer slide"></img> 
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>TOP GUN 2 - MAVERICK</div> 
                            </div>
                            <div className="col-auto text-dark p-2 text-center ">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                src = {lucifer} alt="Segundo Slide"></img>                                                            
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>LUCIFER</div>                    
                            </div>                            
                            <div className="col-auto text-dark p-2 text-center">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                 src={sandman}  alt="Tercer slide"></img>                                
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>SANDMAN</div>
                            </div>
                            <div className="col-auto text-dark p-2 text-center">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                 src={mujermaravilla}  alt="Tercer slide"></img>                                
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>LA MUJER MARAVILLA</div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
   
            {/* <img src={item.src} alt={item.altText} width="30%" height="760px" /> */}

          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption_2} /> */}
          <CarouselCaption/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Carrousel;
