import React, { useState, useRef, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const imageCount = 3;

  const handlePrev = () => {
    setTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? imageCount - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageCount);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = transitioning ? 'transform 0.5s ease-in-out' : 'none';
      carouselRef.current.style.transform = `translateX(-${currentSlide * (100 / imageCount)}%)`;

      const handleTransitionEnd = () => {
        setTransitioning(false);
      };

      carouselRef.current.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        carouselRef.current.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentSlide, transitioning]);

  return (
    <div className="relative w-full h-fit border overflow-hidden">
      <div
        className="flex" // Removed transition from here
        ref={carouselRef}
        style={{ width: `${imageCount * 100}%` }}
      >
        {[...Array(imageCount)].map((_, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={`https://images.pexels.com/photos/${
                index === 0 ? '33129/popcorn-movie-party-entertainment.jpg'
                : index === 1 ? '5662857/pexels-photo-5662857.png'
                : '109669/pexels-photo-109669.jpeg'
              }`}
              alt={`Image ${index + 1}`}
              className="w-full h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;