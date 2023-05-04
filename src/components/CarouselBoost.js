import './CarouselBoost.css';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/img/projects/art-work-1.jpg';

export function CarouselBoost() {
   return (
      <Carousel className="carousel">
         <Carousel.Item className="carousel-item">
            <img className="carousel-img" src={img1} alt="First slide" />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img className="carousel-img" src={img1} alt="Second slide" />

            <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img className="carousel-img" src={img1} alt="Third slide" />

            <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}
