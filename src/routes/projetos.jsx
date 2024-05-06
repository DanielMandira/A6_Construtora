import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetosData from '../data/projetosData'
import Location from '../assets/icons/local.svg'
import ArrowRD from '../assets/icons/ArrowRD.svg'
import Estrutura from '../assets/icons/estrutura.png'
const Projetos = () => {
  const { id } = useParams(); // Obtém o ID da URL
    const projeto = ProjetosData.find(projeto => projeto.id === parseInt(id));

  if (!projeto) {
    return <div>
      <h3 className='Sora Text-xl text-white text-center justify-center m-36 '>Não foi encontrada nenhuma obra com o ID fornecido.</h3>
    </div>;
  }
  const ImagemHeader = projeto.img[1];
  const ImagemText = projeto.img[2];

  return (
    <>
    <section className='grid grid-flow-row'>
      <img className='w-full' src={ImagemHeader.src}/>
    </section>
    <br />
    <section className='grid grid-flow-row px-3 gap-3 my-5 md:px-5 md:grid-flow-col'>
      <div className='grid grid-flow-row gap-5'>
      <p className='Sora text-laranja-primary text-sm md:hidden'>Serviços</p>
      <p className='Sora text-laranja-primary text-base hidden md:grid'>Portifólio de Projetos</p>
      <h1 className='Michroma text-white text-2xl md:text-3xl leading-normal  '>SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h1>
      <div className='grid grid-flow-col justify-start items-center'>
      <img className='size-10 ' src={Location}/>
      <p className='Sora text-laranja-primary text-base md:text-xl'>Goiânia - Goiás</p>
      </div>
      <p className='Sora hidden md:grid text-white text-base'>{projeto.info}</p>
      </div>
      <img className='h-full object-cover hidden md:grid' src={ImagemText.src}/>
    </section>
    <br />
    {/* Mobile */}
    <section className='grid md:hidden grid-flow-row gap-3 px-3' >
      <img className='w-full' src={ImagemText.src}/>
      <p className='Sora text-white text-xs'>{projeto.info}</p>
    </section>
    <br />
    <section className='grid grid-flow-row gap-3 px-3 my-5 md:px-5' >
      <div className='grid grid-flow-col items-center justify-start'>
    <h2 className='Michroma text-white text-2xl md:text-5xl decoration-laranja-primary underline'> GALERIA </h2>
    &nbsp;&nbsp;
    <img src={ArrowRD} className='size-6 ' />
      </div>
      <div className='grid grid-flow-row md:grid-cols-2'>
        {/* Mapeia e exibe as imagens da obra */}
        {projeto.img.map((imagem, index) => (
          <img key={index} src={imagem.src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
      </section>
      <br />
      <br />
      <hr className=' bg-white' />
      <section className=' hidden md:grid grid-cols-2 justify-center text-start px-5 gap-3 justify-items-center justify-self-center items-center'>
        <div className='grid grid-flow-row gap-5'>
        <h2 className='Michroma text-4xl text-white'>DEIXE-NOS CONSTRUIR SEU 
        <span className=' text-laranja-primary'> SONHO</span>
        </h2>
        <a className='Sora text-white text-2xl p-4 rounded-full border text-center justify-self-start border-white hover:scale-105 hover:bg-laranja-primary hover:text-black '>Pedir Orçamento</a>
        </div>
        <img src={Estrutura}/>
      </section>
      {/* Mobile */}
      <section className='grid md:hidden grid-flow-row justify-center text-center px-3 gap-5 justify-items-center'>
        <img src={Estrutura}/>
        <h2 className='Michroma text-3xl text-white'>DEIXE-NOS CONSTRUIR SEU 
        <span className=' text-laranja-primary'> SONHO</span>
        </h2>
        <a className='Sora min-w-60   text-white text-base p-4 rounded-full border border-white hover:scale-105 hover:bg-laranja-primary hover:text-black '>Pedir Orçamento</a>
        
      </section>
      </>
  );
}

export default Projetos;