import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CarouselData from '../data/carouseldata';
import Estrutura from '../assets/icons/estrutura.png'
import Carousel from '../components/carousel.jsx';

const Servicos = () => {
  const { id } = useParams(); // Obtém o ID da URL
    const servico = CarouselData.find(servico => servico.id === parseInt(id));

  if (!servico) {
    return <div>
      <h3 className='Sora Text-xl text-white text-center justify-center m-36 '>Não foi encontrada Servico com o ID fornecido.</h3>
    </div>;
  }
    const location = useLocation()
    useEffect(()=>{
      scrollTo(0,0)
    }, [location.pathname])
  return (
    <>
    <br />
    <section className='grid grid-flow-row mx-3  gap-3 my-5 md:mx-5 lg:mx-10 xl:mx-20 md:grid-flow-col'>
      <div className='grid grid-flow-row gap-3 content-start col-span-1'>
      <p className='Sora text-laranja-primary text-sm md:hidden'>Serviços</p>
      <p className='Sora text-laranja-primary text-base lg:text-xl hidden md:grid'>Portifólio de Projetos</p>
      <h1 className='Michroma text-white text-2xl md:text-3xl lg:text-5xl lg:leading-normal leading-normal md:hidden  '>SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h1>
      <h1 className='Michroma text-white text-2xl md:text-3xl lg:text-5xl lg:leading-normal leading-normal hidden md:grid '>{servico.title}</h1>
      <div className='grid grid-flow-col justify-start items-center'>
      </div>
      <p className='Sora hidden md:grid text-white text-base'>{servico.info}</p>
      </div>
      <div className=' col-span-3'>
      <img className='h-full max-h-113 w-706   object-cover  hidden md:grid grayscale' src={servico.src}/>
      </div>
    </section>
    <br />
    {/* Mobile */}
    <section className='grid md:hidden grid-flow-row gap-3 mx-3' >
      <img className='w-full object-cover grayscale' src={servico.src}/>
      <p className='Sora text-white text-xs'>{servico.info}</p>
    </section>
    <br />
   <section className='grid grid-flow-row mx-5 lg:mx-10 xl:mx-20 gap-3 justify-items-center justify-self-center my-14'>
    <div className=' grid grid-flow-row justify-self-center md:justify-self-start'>
      <h2 className='Michroma text-white text-2xl text-center md:text-start'>MAIS <br className='grid md:hidden'/> SERVIÇOS</h2>
    </div>
    <Carousel data={CarouselData}/>
   </section>
      <br />
      <br />
      <hr className=' bg-white' />
      {/* Final */}
      <section className=' hidden md:grid grid-cols-2 justify-center text-start mx-5 lg:mx-10 xl:mx-20 gap-3 justify-items-center justify-self-center items-center my-14'>
        <div className='grid grid-flow-row gap-5'>
        <h2 className='Michroma text-4xl lg:text-6xl text-white'>DEIXE-NOS CONSTRUIR SEU 
        <span className=' text-laranja-primary'> SONHO</span>
        </h2>
        <a className='Sora text-white text-2xl p-4 rounded-full border text-center justify-self-start border-white hover:scale-105 hover:bg-laranja-primary hover:text-black cursor-pointer '>Pedir Orçamento</a>
        </div>
        <img className='w-full h-max object-contain' src={Estrutura}/>
      </section>
      {/* Mobile */}
      <section className='grid md:hidden grid-flow-row justify-center text-center mx-3 gap-5 justify-items-center'>
        <img src={Estrutura}/>
        <h2 className='Michroma text-3xl text-white'>DEIXE-NOS CONSTRUIR SEU 
        <span className=' text-laranja-primary'> SONHO</span>
        </h2>
        <a className='Sora min-w-60   text-white text-base p-4 rounded-full border border-white hover:scale-105 hover:bg-laranja-primary hover:text-black cursor-pointer'>Pedir Orçamento</a>
        
      </section>
      </>
  );
}

export default Servicos;