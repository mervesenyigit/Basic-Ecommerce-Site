import Button from "./Button";
import Header from "./Header";
import data from "../data/db.json"; 

import React, { useState, useEffect } from "react";
const Home = () => {
     // Slider için aktif index yönetimi
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);
  const [display, setDisplay] = useState("block");
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.slider.length - 1 ? 0 : prevSlide + 1
 
      );

    }, 1000);

    if (display === "none" && slideInterval) {
      clearInterval(slideInterval);
      setSlideInterval(null);
    } else {
      setSlideInterval(interval); // interval sadece display "none" değilse set edilir
    }

    return () => clearInterval(interval);
  }, [display]);

  const pauseSlider = () => {
    if (slideInterval) {
      clearInterval(slideInterval);
      setSlideInterval(null);
    }

    else {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === data.slider.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);
      setSlideInterval(interval);
    }
  };


    return (
        <div>
     
        <header>
          <h1 className="text-center">{data.header.title}</h1>
          <p style={{ display: "flex", flexWrap: "wrap" ,justifyContent:'center'}}>{data.header.subtitle}</p>
        </header>
  
       
        <div className="slider-container">
        {data.slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ 
              backgroundImage: `url(${slide.image})`, 
              display: index === currentSlide ? 'block' : 'none'  
            }}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}

       
      </div>
        
      <div className="slider-buttons">
          <Button borderRadius="0" backgroundColor="#04BFBF" color="white" onClick={() => setCurrentSlide((prevSlide) => prevSlide - 1)}>
          <i className="bi bi-arrow-left-circle"></i>
          </Button>
          <Button    backgroundColor="#04BFBF" color="white" onClick={() => setCurrentSlide((prevSlide) => prevSlide + 1)}>
          <i className="bi bi-arrow-right-circle"></i>
          </Button>
          <Button backgroundColor="#04BFBF" color="white" onClick={pauseSlider}>
          <i className={slideInterval ? "bi bi-pause-circle" : "bi bi-play-circle"}></i>
          </Button>
        </div>
      </div>
      );
}
export default Home;    