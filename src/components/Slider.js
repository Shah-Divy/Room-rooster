import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../styles/Slider.css'; 

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          } else {
            entry.target.classList.remove('zoom-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const { current } = sliderRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section id="aa-slider" ref={sliderRef}>
      <div className="aa-slider-area">
        <div className="aa-top-slider">
          <div className="aa-top-slider-single">
            <Carousel interval={4000} controls={false}>
              <Carousel.Item>
                <img className="d-block w-100" src="img/carousel-1.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="img/carousel-1.jpg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
