import React, { useState, useEffect, useRef } from "react";
import arrow from '../assets/icons/arrow.svg';

const CarouselBeneficios = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numItemsShow, setNumItemsShow] = useState(4);
  const carouselBeneRef = useRef(null);
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
    const threshold = carouselBeneRef.current.offsetWidth * 0.2;

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
        setNumItemsShow(2);
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
    <section className="flex flex-col flex-1 justify-center md:justify-end md:items-end items-center my-10 lg:my-0 ">
      <div
        className="carouselBene flex flex-col md:flex-row gap-justify-center justify-self-center gap-3"
        ref={carouselBeneRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {[...data,...data].slice(currentIndex, currentIndex + numItemsShow).map((d, index) => (
          <div key={index} className="grid grid-flow-row border max-w-xs xl:max-w-sm h-622 md:h-650 md:max-w-60 border-white p-5">
            <div className=" relative h-80">
              <img className=" object-cover h-full w-full grayscale" src={d.src} alt={d.info} />
              <div className="bg-laranja-primary size-16 absolute z-10 right-0 bottom-0">
                <img className="p-2" src={d.icon} alt={d.id} />
              </div>
            </div>
            <div className="gap-3 grid grid-flow-row text-center content-baseline min-h-52 h-full justify-items-center justify-self-center">
              <div className="grid grid-flow-col items-center gap-2">
                <h2 className="Michroma text-laranja-primary text-4xl md:text-5xl lg:text-6xl">{d.id}</h2>
                <h2 className="Michroma text-white text-center md:text-start text-base">{d.title}</h2>
              </div>
              <p className="Sora text-white md:text-start text-sm lg:text-base">{d.info}</p>
            </div>
          </div>
        ))}
      </div>
      {data.length > numItemsShow && (
        <div className="flex flex-row gap-20 top-2 md:justify-end md:-left-2 lg:left-0 md:gap-5 relative">
          <button
            className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={() => handleSlideChange("prev")}
          >
            <img className="p-2 hover:brightness-0 " src={arrow} alt="Previous" />
          </button>
          <button
            className="flex justify-center text-white border hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={() => handleSlideChange("next")}
          >
            <img className="p-2 rotate-180 hover:brightness-0 " src={arrow} alt="Next" />
          </button>
        </div>
      )}
    </section>
  );
};

export default CarouselBeneficios;