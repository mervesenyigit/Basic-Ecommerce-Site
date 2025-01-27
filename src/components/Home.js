import Button from "./Button";
import Header from "./Header";
import data from "../data/db.json"; 

import React, { useState, useEffect } from "react";
const Home = () => {
     // Slider için aktif index yönetimi
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.slider.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(slideInterval); // Component unmount olduğunda interval'ı temizler
}, []);


    return (
        <div>
     
        <header>
          <h1>{data.header.title}</h1>
          <p>{data.header.subtitle}</p>
        </header>
  
       
        <div className="slider-container">
        {data.slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ 
              backgroundImage: `url(${slide.image})`, 
              display: index === currentSlide ? 'block' : 'none'  // active slide sadece görünür
            }}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
        
   
      </div>
      );
}
export default Home;    