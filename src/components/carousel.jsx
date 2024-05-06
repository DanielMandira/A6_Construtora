import React, { useState, useEffect, useRef } from "react";
import arrow from '../assets/icons/arrow.svg';
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItemsShow, setNumItemsShow] = useState(4);
  const carouselRef = useRef(null);
  const startXRef = useRef(0);

  const handleSlideChange = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  const handleDragStart = (event) => {
    startXRef.current = event.clientX || event.touches[0].clientX;
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDragEnd = (event) => {
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchend", handleDragEnd);

    const currentX = event.clientX || event.changedTouches[0].clientX;
    const deltaX = currentX - startXRef.current;
    const threshold = carouselRef.current.offsetWidth * 0.2;

    if (deltaX > threshold) {
      handleSlideChange("prev");
    } else if (deltaX < -threshold) {
      handleSlideChange("next");
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;
      if (windowWidth >= 1024) {
        setNumItemsShow(4);
      } else if (windowWidth >= 768 && windowHeight > 425) {
        setNumItemsShow(3);
      } else {
        setNumItemsShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="grid grid-flow-row justify-center justify-self-center">
      {data.length > numItemsShow && (
        <div className="flex flex-row flex-1 relative -bottom-106 gap-16 md:bottom-9  md:gap-5 md:justify-end">
          <button
            className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={() => handleSlideChange("prev")}
          >
            <img className="p-2 hover:brightness-0" src={arrow} alt="Arrow" />
          </button>
          <button
            className="flex justify-center text-white border  hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={() => handleSlideChange("next")}
          >
            <img className="p-2 rotate-180 hover:brightness-0" src={arrow} alt="Arrow" />
          </button>
        </div>
      )}
      <div
        className="carousel grid grid-flow-col gap-3"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {[...data,...data,...data].slice(currentIndex, currentIndex + numItemsShow).map((d, index) => (
          
          <div key={index} className="grid grid-flow-row  w-66 md:w-56 h-485 md:h-520 xl:w-72 2xl:w-83   border border-white">
            <div className="h-393">
              <img className="object-cover w-full h-full grayscale" src={d.src} alt={d.info} />
            </div>
            <div className="p-3 grid grid-flow-row text-center justify-center content-baseline self-baseline">
              <p className="Sora text-white text-lg md:text-xl lg:text-2xl">{d.info}</p>
              <Link to={`/Servicos/${index}`} className="Sora text-laranja-primary cursor-pointer text-nowrap text-base">+ Saiba Mais</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;