import { useState } from 'react'
import leftArrow from '../../assets/img/arrow-left.svg'
import rightArrow from '../../assets/img/arrow-right.svg'
import './carrousel.scss'

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  // arrows navigation with looping
  function goToNextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  function goToPrevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // animation helper (direction change)
  function setSlideDirection(index) {
    if (current === length - 1 && index === 0) {
      return 'next'
    } else if (current === 0 && index === length - 1) {
      return 'prev'
    } else if (current > index && current !== 0) {
      return 'prev'
    } else if (current < index && current !== length - 1) {
      return 'next'
    }
  }

  return (
    <div className="carrousel-container">
      {
        // if there is more than 1 picture, display navigation arrows
        length !== 1 && (
          <div className="carrousel-button-container">
            <button className="left-arrow" onClick={goToPrevSlide}>
              <img src={leftArrow} alt="précédente" />
            </button>
            <button className="right-arrow" onClick={goToNextSlide}>
              <img src={rightArrow} alt="suivante" />
            </button>
          </div>
        )
      }
      {
        // create a div with a specific className for each slide
        slides.map((slide, index) => {
          return (
            <div
              className={
                current === index
                  ? 'carrousel-img current '
                  : 'carrousel-img ' + setSlideDirection(index)
              }
              key={index}
            >
              {
                // if the div is the one currently displayed, the img is displayed
                index === current && (
                  <>
                    <img src={slide} alt="gallerie d'images" />
                    {
                      // if there is more than one slide, display numbers
                      length !== 1 && (
                        <p>
                          {current + 1}/{length}
                        </p>
                      )
                    }
                  </>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Gallery