import React, { useState, useEffect, useRef } from "react"
import arrow from '../assets/icons/arrow.svg'
// Função seta do carousel
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [numItemsShow, setNumItemsShow] = useState(4)
  const carouselRef = useRef(null)
  const startXRef = useRef(0)

  // Função para mudar o carousel por arrasto
  const handleSlideChange = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex == 0 ? data.length - 1 : prevIndex - 1
      )
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }
  }
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

  //  Ajustar o numero de itens baseado no tamaho da tela
  useEffect(() => {
    const handleResize = () => {
      let windowWidth = screen.width
      if (windowWidth >= 1440) {
        setNumItemsShow(4)
      } else if (windowWidth >= 768) {
          setNumItemsShow(3)
      } else {
        setNumItemsShow(1)
      }
    }
    // chamada inicial para redimensionar tamanho
    handleResize()

    // Add evento para redimentionar tela
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <section className="grid grid-flow-row">
      {/* Botões de navegação */}
      {data.length > numItemsShow && (
        <div className="grid grid-flow-col justify-center gap-32 top-112 md:justify-end lg:right-16 md:bottom-8 md:top-auto md:gap-5 relative ">
          <button className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={() => handleSlideChange("prev")}
          >
            <img className="p-2" src={arrow} />
          </button>
          <button className="flex justify-center text-white border  hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={() => handleSlideChange("next")}
          >
            <img className="p-2 rotate-180" src={arrow} />
          </button>
        </div>
      )}
      <div className="carousel grid grid-flow-row md:grid-flow-col gap-5 items-center justify-center "
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {[...data, ...data, ...data].slice(currentIndex, currentIndex + numItemsShow).map((d) => (
          <div className=" border w-80 h-546 lg:w-96 border-white">
            <div className="w-full  h-82">
              <img className=" h-full w-full object-cover grayscale" src={d.src} />
            </div>
            <div className="p-3 grid grid-flow-row text-center content-baseline justify-items-center justify-self-center">
              <p className="Sora text-white text-lg md:text-xl lg:text-2xl">{d.info}</p>
              <a className="Sora text-laranja-primary cursor-pointer text-nowrap text-base">+ Saiba Mais</a>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}
export default Carousel

