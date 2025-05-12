import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sliderData } from './data/sliderData';

const ImageSlider = () => {
  const [value, setValue] = useState(0);
  const [trailValue, setTrailValue] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [randomImages, setRandomImages] = useState([]);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Generate random image numbers between 1-90
  useEffect(() => {
    const getRandomImages = () => {
      const images = [];
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        const paddedNum = randomNum.toString().padStart(2, '0');
        images.push(`img/haircut/${paddedNum}.jpg`);
      }
      return images;
    };
    
    setRandomImages(getRandomImages());
  }, []);
  
  // Handle slide change - using useCallback to fix the dependency warning
  const slide = useCallback((condition) => {
    if (isTransitioning) return;
    
    clearInterval(intervalRef.current);
    setIsTransitioning(true);
    
    if (condition === "increase") {
      setValue(prevValue => {
        // Smooth transition logic
        if (prevValue === 80) {
          return 0;
        } else {
          return prevValue + 20;
        }
      });
    } else {
      setValue(prevValue => prevValue === 0 ? 80 : prevValue - 20);
    }
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    
    if (!isPaused) {
      intervalRef.current = setInterval(() => slide("increase"), 4000);
    }
  }, [isPaused, isTransitioning]);

  // Update trail based on value
  useEffect(() => {
    let newTrailValue = 0;
    
    if (value === 0) newTrailValue = 0;
    else if (value === 20) newTrailValue = 1;
    else if (value === 40) newTrailValue = 2;
    else if (value === 60) newTrailValue = 3;
    else newTrailValue = 4;
    
    setTrailValue(newTrailValue);
  }, [value]);

  // Setup interval for automatic sliding
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => slide("increase"), 4000);
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isPaused, slide]);

  // Touch slide functionality
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let start, move, change, sliderWidth;
    
    const touchStart = (e) => {
      start = e.touches[0].clientX;
      sliderWidth = slider.clientWidth / 5;
      setIsPaused(true);
    };
    
    const touchMove = (e) => {
      e.preventDefault();
      move = e.touches[0].clientX;
      change = start - move;
    };
    
    const touchEnd = () => {
      if (change > (sliderWidth / 4)) {
        slide("increase");
      } else if ((change * -1) > (sliderWidth / 4)) {
        slide("decrease");
      }
      
      [start, move, change, sliderWidth] = [0, 0, 0, 0];
      setIsPaused(false);
    };
    
    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", touchEnd);
    
    return () => {
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchmove", touchMove);
      slider.removeEventListener("touchend", touchEnd);
    };
  }, [slide]);

  // Animation references
  const bgRef = useRef(null);
  const pRef = useRef(null);
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  // GSAP-like animation effect on slide change
  useEffect(() => {
    if (bgRef.current && pRef.current && h1Ref.current && buttonRef.current) {
      // Reset animations
      bgRef.current.style.transform = 'translateX(-100%)';
      bgRef.current.style.opacity = '0';
      pRef.current.style.opacity = '0';
      h1Ref.current.style.opacity = '0';
      h1Ref.current.style.transform = 'translateY(30px)';
      buttonRef.current.style.opacity = '0';
      buttonRef.current.style.transform = 'translateY(-40px)';
      
      // Play animations
      setTimeout(() => {
        bgRef.current.style.transform = 'translateX(0)';
        bgRef.current.style.opacity = '1';
        bgRef.current.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      }, 0);
      
      setTimeout(() => {
        pRef.current.style.opacity = '1';
        pRef.current.style.transition = 'opacity 0.6s ease';
      }, 300);
      
      setTimeout(() => {
        h1Ref.current.style.opacity = '1';
        h1Ref.current.style.transform = 'translateY(0)';
        h1Ref.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }, 300);
      
      setTimeout(() => {
        buttonRef.current.style.opacity = '1';
        buttonRef.current.style.transform = 'translateY(0)';
        buttonRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      }, 200);
    }
  }, [trailValue]);

  const renderBoxContent = (index) => {
    const slideInfo = sliderData[index];
    
    return (
      <div className={`w-full h-full grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden relative ${slideInfo.bgColor}`}>
        <div ref={bgRef} className="bg-purple-900 bg-opacity-40 w-full md:w-3/5 h-full md:h-full absolute md:skew-x-[7deg] md:left-[-10%] bottom-0 md:transform-origin-bottom-left z-0"></div>
        
        <div className="p-5 md:pl-24 z-10 col-span-1 row-span-full md:text-left text-center md:transform-none transform -translate-y-8">
          <h1 ref={h1Ref} className="text-3xl font-medium mb-2 text-white">{slideInfo.title}</h1>
          <p ref={pRef} className="text-sm text-purple-100 mb-6 inline-block md:mr-12">
            {slideInfo.description}
          </p>
          <button ref={buttonRef} className={`py-2 px-8 text-white rounded-full ${slideInfo.buttonBg} hover:opacity-80 transition-opacity duration-300`}>
            {slideInfo.buttonText}
          </button>
        </div>
        
        <div className="col-span-1 md:col-start-2 flex justify-center items-center">
          {randomImages[index] && (
            <div className="relative h-56 w-40 md:h-64 md:w-48 rounded-lg overflow-hidden">
              <img 
                src={randomImages[index]} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-purple-900 bg-opacity-30"></div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-purple-900 text-white shadow-xl max-w-screen-xl mx-auto">
      <div 
        ref={sliderRef}
        className="flex h-[22rem] md:h-[28rem] transition-all duration-300 ease-in" 
        style={{ transform: `translateX(-${value}%)`, width: '500%' }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="h-full w-full">
            {renderBoxContent(index)}
          </div>
        ))}
      </div>
      
      {/* Previous button */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 z-20 hidden md:block" 
        width="56.898" 
        height="91" 
        viewBox="0 0 56.898 91"
        onClick={() => slide("decrease")}
      >
        <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/>
      </svg>
      
      {/* Next button */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 z-20 hidden md:block" 
        width="56.898" 
        height="91" 
        viewBox="0 0 56.898 91"
        onClick={() => slide("increase")}
      >
        <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/>
      </svg>
    </div>
  );
};

export default ImageSlider;