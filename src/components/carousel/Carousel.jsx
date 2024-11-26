import { useState } from 'react'
import Slide from './Slide'
import './Carousel.css'

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + slides.length) % slides.length
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % slides.length
    )
  }

  return (
    <div className="carousel">
      <div 
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  )
}

export default Carousel 