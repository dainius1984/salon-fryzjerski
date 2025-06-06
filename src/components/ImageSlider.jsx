import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Improved touch slide functionality with better scrolling detection
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let startX, startY, moveX, moveY, changeX, changeY, sliderWidth;
    let isScrolling = false;
    let touchStartTime = 0;
    
    const touchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      sliderWidth = slider.clientWidth / 5;
      touchStartTime = Date.now();
      setIsPaused(true);
    };
    
    const touchMove = (e) => {
      // Don't do anything if we've determined this is a scroll
      if (isScrolling) return;
      
      moveX = e.touches[0].clientX;
      moveY = e.touches[0].clientY;
      changeX = startX - moveX;
      changeY = startY - moveY;
      
      // If primarily vertical movement, let the document scroll
      if (Math.abs(changeY) > Math.abs(changeX) * 1.2) {
        isScrolling = true;
        return;
      }
      
      // Only prevent default for horizontal movement
      if (Math.abs(changeX) > Math.abs(changeY) * 0.8) {
        e.preventDefault();
      }
    };
    
    const touchEnd = (e) => {
      // Don't trigger slide if was scrolling
      if (isScrolling) {
        [startX, startY, moveX, moveY, changeX, changeY, sliderWidth] = [0, 0, 0, 0, 0, 0, 0];
        isScrolling = false;
        setIsPaused(false);
        return;
      }
      
      // Calculate swipe duration
      const touchDuration = Date.now() - touchStartTime;
      
      // If it was a quick swipe or moved enough distance
      if ((touchDuration < 300 && Math.abs(changeX) > sliderWidth / 10) || 
          Math.abs(changeX) > sliderWidth / 4) {
        if (changeX > 0) {
          slide("increase");
        } else {
          slide("decrease");
        }
      }
      
      // Reset all values
      [startX, startY, moveX, moveY, changeX, changeY, sliderWidth] = [0, 0, 0, 0, 0, 0, 0];
      isScrolling = false;
      setIsPaused(false);
    };
    
    slider.addEventListener("touchstart", touchStart, { passive: true });
    slider.addEventListener("touchmove", touchMove, { passive: false });
    slider.addEventListener("touchend", touchEnd, { passive: true });
    
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
    if (bgRef.current && h1Ref.current && buttonRef.current) {
      // Reset animations
      bgRef.current.style.transform = 'translateX(-100%)';
      bgRef.current.style.opacity = '0';
      
      if (pRef.current) {
        pRef.current.style.opacity = '0';
      }
      
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
      
      if (pRef.current) {
        setTimeout(() => {
          pRef.current.style.opacity = '1';
          pRef.current.style.transition = 'opacity 0.6s ease';
        }, 300);
      }
      
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
        <div ref={bgRef} className="bg-purple-900 bg-opacity-40 w-full md:w-3/5 h-full absolute md:skew-x-[7deg] md:left-[-10%] bottom-0 md:transform-origin-bottom-left z-0"></div>
        
        <div className="p-4 md:p-5 md:pl-24 z-10 col-span-1 row-span-full text-center md:text-left flex flex-col items-center md:items-start justify-start pt-2 md:justify-center">
          {/* Title looks good on both mobile and desktop */}
          <h1 ref={h1Ref} className="text-lg md:text-3xl font-medium mb-1 md:mb-2 text-white">{slideInfo.title}</h1>
          
          {/* Description only on desktop */}
          <p ref={pRef} className="hidden md:inline-block text-sm md:text-base text-purple-100 mb-6 md:mr-12">
            {slideInfo.description}
          </p>
          
          {/* Button only on desktop */}
          <Link 
            to="/kontakt" 
            ref={buttonRef} 
            className={`hidden md:inline-block py-2 px-8 text-white rounded-full ${slideInfo.buttonBg} hover:opacity-80 transition-opacity duration-300`}
          >
            {slideInfo.buttonText}
          </Link>
        </div>
        
        <div className="col-span-1 md:col-start-2 flex justify-center items-center">
          {randomImages[index] && (
            <div className="relative h-60 w-48 md:h-64 md:w-48 rounded-t-lg rounded-b-2xl md:rounded-lg overflow-hidden -mt-2 md:mt-0 mb-10 md:mb-0">
              <img 
                src={randomImages[index]} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover object-center slider-image"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-purple-900 bg-opacity-30"></div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative md:overflow-hidden overflow-visible rounded-xl bg-purple-900 text-white shadow-xl max-w-screen-xl mx-auto px-4 sm:px-12 md:px-16">
      <div 
        ref={sliderRef}
        className="flex h-80 md:h-[28rem] transition-all duration-300 ease-in pb-8 md:pb-0" 
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
        className="absolute top-1/2 left-1 md:left-4 transform -translate-y-1/2 w-5 md:w-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 z-20"
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
        className="absolute top-1/2 right-1 md:right-4 transform -translate-y-1/2 w-5 md:w-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 z-20"
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