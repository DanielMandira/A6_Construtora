import React, { useState, useEffect } from "react"
import arrow from '../assets/icons/arrow.svg'
// Função seta do carousel
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [numItemsShow, setNumItemsShow] = useState(4)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }
  // Função para mudar o carousel por arrasto
  const handleSlideChange = (direction) => {
    if(direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex == 0 ? data.length - 1 : prevIndex - 1
      )
    } else{
      setCurrentIndex((prevIndex) => (prevIndex + 1 ) % data.length )
    }
  }

  //  Ajustar o numero de itens baseado no tamaho da tela

  useEffect(()=>{
    const handleResize = () =>{
      const windowWidth = window.innerWidth
      if(windowWidth >= 1024){
        setNumItemsShow(4)
      }else if(windowWidth >= 768){
        setNumItemsShow(3)
      }else{
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
        <div className="grid grid-flow-col justify-center gap-24 top-88 md:justify-end md:bottom-8 md:top-auto md:gap-5 relative">
          <button className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={()=> handleSlideChange("prev")}
          >
            <img className="p-2" src={arrow} />
          </button>
          <button className="flex justify-center text-white border  hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={()=> handleSlideChange("next")}
          >
            <img className="p-2 rotate-180" src={arrow} />
          </button>
        </div>
      )}
      <div className=" grid grid-flow-row md:grid-flow-col justify-center ">
        {[...data, ...data, ...data].slice(currentIndex, currentIndex + numItemsShow).map((d) => (
          <div className="border h-485 md:h-auto border-white md:mx-2">
            <img className="w-72 h-96 md:w-96 md:h-40 grayscale " src={d.src} />
            <div className="p-3 grid grid-flow-row text-center content-baseline w-72 md:h-32">
              <p className="Sora text-white text-xl lg:text-2xl">{d.info}</p>
              <a className="Sora text-laranja-primary cursor-pointer text-base">+ Saiba Mais</a>
            </div>
          </div>

        ))}


      </div>

    </section>

  )
}
export default Carousel

