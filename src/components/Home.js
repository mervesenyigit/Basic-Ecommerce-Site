import Button from "./Button";

import data from "../data/db.json"; 
import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Oynatma durumu kontrolü
  let slideInterval;

  useEffect(() => {
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          let nextSlide = prevSlide === data.slider.length - 1 ? 0 : prevSlide + 1;
          return data.slider[nextSlide]?.image ? nextSlide : 0; // Eğer görsel yoksa başa dön
        });
      }, 3000);
    }

    return () => clearInterval(slideInterval);
  }, [isPlaying]); // Oynatma durumu değiştiğinde useEffect yeniden çalışır

  const pauseSlider = () => {
    setIsPlaying((prev) => !prev); // Oynatma durumunu değiştir
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      let nextSlide = prevSlide === data.slider.length - 1 ? 0 : prevSlide + 1;
      return data.slider[nextSlide]?.image ? nextSlide : 0; // Eğer görsel yoksa başa dön
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      let prev = prevSlide === 0 ? data.slider.length - 1 : prevSlide - 1;
      return data.slider[prev]?.image ? prev : 0; // Eğer görsel yoksa başa dön
    });
  };

  return (
    <div>
      <header>
        <h1 className="text-center">{data.header.title}</h1>
        <p style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {data.header.subtitle}
        </p>
      </header>

      <div className="slider-container">
        {data.slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              display: index === currentSlide ? "block" : "none",
            }}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <Button borderRadius="0" backgroundColor="#04BFBF" color="white" onClick={prevSlide}>
          <i className="bi bi-arrow-left-circle"></i>
        </Button>
        <Button backgroundColor="#04BFBF" color="white" onClick={nextSlide}>
          <i className="bi bi-arrow-right-circle"></i>
        </Button>
        <Button backgroundColor="#04BFBF" color="white" onClick={pauseSlider}>
          <i className={isPlaying ? "bi bi-pause-circle" : "bi bi-play-circle"}></i>
        </Button>
      </div>
    </div>
  );
};

export default Home;
