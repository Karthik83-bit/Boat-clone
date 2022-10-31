import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/slide1.webp'
import img2 from '../images/slide2.webp'
import img3 from '../images/slide3.webp'
import img4 from '../images/slide4.webp'
import Next from '@mui/icons-material/NavigateNext'
import Prev from '@mui/icons-material/NavigateBefore'

export default function Slider() {
  return (
    <Carousel className='slider' style={{overflow:"hidden"}}  prevIcon={<Prev style={{width:'8em',height:'8em' ,color:'red'}}/>} nextIcon={<Next style={{width:'8em',height:'8em' ,color:'red'}}/>}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="fourth slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
