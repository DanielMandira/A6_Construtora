import React, {useState} from "react"
import arrow from '../assets/icons/arrow.svg'
import Residencial from '../assets/imgs/residencial.webp'
import Remodelacao from '../assets/imgs/remodelacao.webp'
import Manutencao from '../assets/imgs/manutencao_reparos.webp'
import Projetos from '../assets/imgs/gerenciamento_projetos.webp'
import EdIndustrial from '../assets/imgs/edIndustrial.webp'
import Engenharia from '../assets/imgs/design_engenharia.webp'
const Carousel = ({data}) =>{
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide=()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % data.length)    
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? data.length -1 : prevIndex -1
    )
    }
    return(
<section className="grid grid-flow-row">
{/* Botões de navegação */}
{data.length > 4 && (
        <div className="grid grid-flow-col  justify-end bottom-8 relative">
          <button className="flex justify-center text-white border w-24 hover:bg-laranja-primary duration-500 border-white rounded-full "
            onClick={prevSlide}
          >
            <img className="p-2" src={arrow} />
          </button>
          <button className="flex justify-center text-white border  hover:bg-laranja-primary duration-500 border-white rounded-full w-24"
            onClick={nextSlide}
          >
             <img className="p-2 rotate-180" src={arrow} />
          </button>
        </div>
      )}
        <div className=" grid grid-flow-col ">
        {[...data, ...data, ...data].slice(currentIndex, currentIndex + 4).map((d) => (
            <div className="border border-white mx-2"> 
                <img className="w-96 h-40 grayscale " src={d.src}/>
            <div className="p-3 grid grid-flow-row text-center content-baseline h-32">
                <p className="Sora text-white">{d.info}</p>
                <a className="Sora text-laranja-primary cursor-pointer">+ Saiba Mais</a>
            </div>
            </div>

        ))}
        

    </div>

    </section>

)
} 
export default Carousel
   
