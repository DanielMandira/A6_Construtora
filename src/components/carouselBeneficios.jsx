import React, { useState, useEffect, useRef } from "react"
import arrow from '../assets/icons/arrow.svg'
// Função seta do carousel
const CarouselBeneficios = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [numItemsShow, setNumItemsShow] = useState(4)
  const carouselBeneRef = useRef(null)
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
    const threshold = carouselBeneRef.current.offsetWidth * 0.2;
  
    if (deltaX > threshold) {
      handleSlideChange("prev");
    } else if (deltaX < -threshold) {
      handleSlideChange("next");
    }
  };
  //  Ajustar o numero de itens baseado no tamaho da tela

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = document.body.clientWidth
      if (windowWidth >= 1024) {
        setNumItemsShow(2)
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
           <div className="grid grid-flow-col justify-center gap-32 top-97 md:justify-end md:-left-2 lg:left-0 md:-bottom-100 md:top-auto md:gap-5 relative">
          <button className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={() => handleSlideChange("prev")}
          >
            <img className="p-2" src={arrow} />
          </button>
          <button className="flex justify-center text-white border hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={() => handleSlideChange("next")}
          >
            <img className="p-2 rotate-180 hover:brightness-0 " src={arrow} />
          </button>
        </div>
      )}
      {/* Carousel container com funcioalidade de arrasto  */}
      <div className="carouselBene grid grid-flow-row md:grid-flow-col gap-5 justify-center "
      ref={carouselBeneRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      >
        {[...data, ...data, ...data].slice(currentIndex, currentIndex + numItemsShow).map((d) => (
          <div className="border border-white md:mx-2 max-w-80">
            <div className="relative w-full h-96 md:h-40">
              <img className=" w-full h-full object-cover md:h-40 grayscale" src={d.src} />
              <div className="bg-laranja-primary size-16 absolute z-10 right-0 bottom-0">
                <img className="p-2" src={d.icon} />
              </div>
            </div>
            <div className="p-3 gap-5 grid grid-flow-row text-center content-baseline min-h-52 h-full justify-items-center justify-self-center">
              <div className="grid grid-flow-col items-center gap-3">
              <h2 className="Michroma text-laranja-primary text-6xl">{d.id}</h2>
              <h2 className="Michroma text-white text-center md:text-start text-base">{d.title}</h2>
                </div>
              <p className="Sora text-white md:text-start text-sm lg:text-base">{d.info}</p>
            </div>
          </div>

        ))}
      </div>
    </section>

  )
}
export default CarouselBeneficios

