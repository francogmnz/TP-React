import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/descarg.jpg" 
      alt="slide 1" 
      
      />
      <Carousel.Caption>
        <h3>La mejor tienda online que vas a encontrar</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/f058a1bd76d0490a5db91b064aa306bd.jpg" alt="slide2" />

      <Carousel.Caption>
        <h3>La mejor tienda online que vas a encontrar</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/image.jpg" alt="slide3" />
      <Carousel.Caption>
        <h3>La mejor tienda online que vas a encontrar</h3>
        <p>
          Te Brindamos todo el asesoramiento!!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome