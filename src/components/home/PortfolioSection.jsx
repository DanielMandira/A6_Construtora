import React from 'react';
import { Link } from 'react-router-dom';
import Mouse from '../../assets/icons/mouse.svg';
import Obra1 from '../../assets/imgs/Obra_1/Obra_1.3.webp';
import Obra2 from '../../assets/imgs/Obra_2/Obra_2.2.webp';
import Obra3 from '../../assets/imgs/Obra_3/Obra_3.2.webp';
import Obra4 from '../../assets/imgs/Obra_4/Obra_4.1.webp';

const PortfolioSection = () => {
  return (
    <section id="projetos" className="grid grid-flow-row md:grid-flow-col px-5 lg:px-10 xl:px-20 mb:my-10 lg:my-36 md:gap-3 justify-center justify-self-center gap-3">
      <div className="grid grid-flow-col justify-end gap-3">
        <div className="flex flex-col gap-5 justify-end">
          <div className="flex flex-col">
            <h2 className="Michroma text-2xl md:text-3xl lg:text-5xl text-white text-center md:text-start">POTIFOLIO DE <br /><span className=" text-laranja-primary">PROJETOS</span></h2>
            <br />
            <p className="Sora text-white hidden lg:grid text-start">Vislumbre o que podemos fazer!</p>
          </div>
          <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
            <div className="grid relative">
              <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} loading="lazy" decoding="async" alt="mouse" />
                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
              </div>
              <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
              </div>
              <img src={Obra1} className="grayscale hover:grayscale-0 object-cover duration-300 lg:h-full md:max-w-full w-auto" loading="lazy" decoding="async" alt="Gerenciamento de obra" />
            </div>
            <div className="grid gap-2 text-center md:text-start">
              <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GERENCIAMENTO DE OBRA</h3>
              <p className="Sora text-xs text-white lg:text-base">Oferecemos supervisão completa de obras, garantindo qualidade, prazos e orçamento rigorosamente controlados.</p>
              <div className="grid md:grid-flow-col self-center items-center gap-3">
                <a href="#contato" className="Sora justify-self-center cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                <Link to="/Projetos/1" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
            <div className="grid relative">
              <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} loading="lazy" decoding="async" alt="mouse" />
                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
              </div>
              <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
              </div>
              <img src={Obra2} className="grayscale hover:grayscale-0 duration-300 object-cover lg:h-full md:max-w-full" loading="lazy" decoding="async" alt="Adequação de sala comercial" />
            </div>
            <div className="grid gap-3 text-center md:text-start ">
              <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">ADEQUAÇÃO DE SALA COMERCIAL</h3>
              <p className="Sora text-xs text-white lg:text-base">Adaptamos salas comerciais para diversas necessidades, criando ambientes funcionais e esteticamente agradáveis.</p>
              <div className="grid md:grid-flow-col self-center items-center gap-5">
                <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                <Link to="/Projetos/2" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row gap-5">
        <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
          <div className="grid relative">
            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
              <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} loading="lazy" decoding="async" alt="mouse" />
              <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
            </div>
            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
              <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
            </div>
            <img src={Obra3} className="grayscale hover:grayscale-0 duration-300 object-cover lg:h-full w-auto md:max-w-full" loading="lazy" decoding="async" alt="Execução de piso polido" />
          </div>
          <div className="grid gap-3 text-center md:text-start ">
            <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">EXECUÇÃO DE PISO POLIDO</h3>
            <p className="Sora text-xs text-white lg:text-base">Projetamos galpões industriais robustos e eficientes, otimizados para armazenamento, logística e produção.</p>
            <div className="grid md:grid-flow-col self-center items-center gap-5">
              <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
              <Link to="/Projetos/3" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
          <div className="grid relative">
            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
              <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} loading="lazy" decoding="async" alt="mouse" />
              <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
            </div>
            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
              <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
            </div>
            <img src={Obra4} className="grayscale hover:grayscale-0 duration-300 object-cover lg:h-full md:max-w-full" loading="lazy" decoding="async" alt="Reforma de apartamento" />
          </div>
          <div className="grid gap-3 text-center md:text-start ">
            <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">REFORMA DE <br /> APARTAMENTO</h3>
            <p className="Sora text-xs text-white lg:text-base">Renovamos apartamentos com modernização completa, aumentando seu valor de mercado e conforto diário.</p>
            <div className="grid md:grid-flow-col self-center items-center gap-5">
              <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
              <Link to="/Projetos/4" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
