import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slider/slide1.jpg';
import slide2 from '../assets/slider/slide2.png';
import slide3 from '../assets/slider/slide3.jpg';
import slide4 from '../assets/slider/slide4.jpg';
import slide5 from '../assets/slider/slide5.png';
import slide6 from '../assets/slider/slide6.jpg';

function Caro() {
    var carouselitems = [
        {
        image: slide1,
        slidetitle: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
        image: slide2,
        slidetitle: "second slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
        image: slide3,
        slidetitle: "third slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
        image: slide4,
        slidetitle: "fourth slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        
     
    ];
  return (
    <Carousel data-bs-theme="dark">
       {carouselitems.map((carouselitem)=>
       <Carousel.Item>
       <img
         className="d-block w-100"
         src={carouselitem.image}
         alt="First slide"
       />
       <Carousel.Caption>
         <h5>{carouselitem.slidetitle}</h5>
         <p>{carouselitem.description}</p>
       </Carousel.Caption>
       </Carousel.Item>
    
    )} 
      

    </Carousel>
  );
}

export default Caro;