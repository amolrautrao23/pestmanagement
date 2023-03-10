import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/header.css';
import img1 from '../img/IMG1.webp'
import img2 from '../img/IMG5.webp'
import img3 from '../img/IMG6.webp'


function CarouselFadeExample() {

  return (
    <Carousel fade className='main-carousel'>
      <Carousel.Item  >
        <img 
        className="carausel-img"
          src={img1} 
          alt="First slide"
        />
        <Carousel.Caption className=' carousel-data '>
          <h1>residential Pest Management</h1>
          <p>To control Pest In sensitive premise with a minimum use of pesticides which are safe and less toxic in nature.</p>
          <NavLink className='btn-contact-carousel'>Contact Now</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="carausel-img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className=' carousel-data'>
          <h1>Commercial Pest Management</h1>
          <p> Our services ensure safety stability and the highest service efficiencies in equal measure.</p>
          <NavLink className='btn-contact-carousel'>Contact Now</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="carausel-img"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className=' carousel-data'>
          <h1>Industrial Pest Management</h1>
          <p>
            Don't worry our team developing and working with mutual trust
          </p>
          <NavLink className='btn-contact-carousel '>Contact Now</NavLink>
 </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;