import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProjetosData from '../data/projetosData';
import Location from '../assets/icons/local.svg';
import ArrowRD from '../assets/icons/ArrowRD.svg';
import Estrutura from '../assets/icons/estrutura.png';

const imageModules = import.meta.glob('../assets/imgs/Obra_*/*.webp');

const Projetos = () => {
  const { id } = useParams();
  const projeto = ProjetosData.find((item) => item.id === Number.parseInt(id, 10));
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      if (!projeto) {
        setGalleryImages([]);
        setIsLoadingImages(false);
        return;
      }

      setIsLoadingImages(true);
      const images = await Promise.all(
        projeto.imgPaths.map(async (imgPath) => {
          const moduleKey = `../assets/imgs/${imgPath}`;
          const loadModule = imageModules[moduleKey];
          if (!loadModule) return null;
          const module = await loadModule();
          return module.default;
        })
      );

      if (!cancelled) {
        setGalleryImages(images.filter(Boolean));
        setIsLoadingImages(false);
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [projeto]);

  const imagemHeader = useMemo(() => galleryImages[1] || galleryImages[0], [galleryImages]);
  const imagemText = useMemo(() => galleryImages[2] || galleryImages[0], [galleryImages]);

  if (!projeto) {
    return (
      <div>
        <h3 className="Sora Text-xl text-white text-center justify-center m-36 ">Não foi encontrada nenhuma obra com o ID fornecido.</h3>
      </div>
    );
  }

  return (
    <>
      <section className="grid grid-flow-row">
        {imagemHeader ? (
          <img className="w-full" src={imagemHeader} alt={projeto.titulo} width="1600" height="700" fetchPriority="high" decoding="async" />
        ) : (
          <div className="w-full h-72 bg-cinza animate-pulse" />
        )}
      </section>
      <br />
      <section className="grid grid-flow-row mx-3  gap-3 my-10 md:mx-5 lg:mx-10 xl:mx-20 md:grid-flow-col">
        <div className="grid grid-flow-row gap-5 content-start">
          <p className="Sora text-laranja-primary text-sm md:hidden">Serviços</p>
          <p className="Sora text-laranja-primary text-base lg:text-xl hidden md:grid">Portifólio de Projetos</p>
          <h1 className="Michroma text-white text-2xl md:text-3xl lg:text-5xl lg:leading-normal leading-normal md:hidden">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h1>
          <h1 className="Michroma text-white text-2xl md:text-3xl lg:text-5xl lg:leading-normal leading-normal hidden md:grid">{projeto.titulo}</h1>
          <div className="grid grid-flow-col justify-start items-center">
            <img className="size-10 " src={Location} alt="Localização" loading="lazy" decoding="async" />
            <p className="Sora text-laranja-primary text-base md:text-xl lg:text-2xl">Goiânia - Goiás</p>
          </div>
          <p className="Sora hidden md:grid text-white text-base">{projeto.info}</p>
        </div>
        <div className=" col-span-2">
          {imagemText ? (
            <img className="h-full object-cover hidden md:grid" src={imagemText} alt={projeto.titulo} width="900" height="650" loading="lazy" decoding="async" />
          ) : (
            <div className="h-80 bg-cinza animate-pulse hidden md:grid" />
          )}
        </div>
      </section>
      <br />
      <section className="grid md:hidden grid-flow-row gap-3 mx-3">
        {imagemText ? <img className="w-full" src={imagemText} alt={projeto.titulo} width="800" height="550" loading="lazy" decoding="async" /> : <div className="w-full h-64 bg-cinza animate-pulse" />}
        <p className="Sora text-white text-xs">{projeto.info}</p>
      </section>
      <br />
      <section className="grid grid-flow-row gap-3 mx-3 my-5 md:mx-5 lg:mx-10 xl:mx-20">
        <div className="grid grid-flow-col items-center justify-start">
          <h2 className="Michroma text-white text-2xl md:text-5xl decoration-laranja-primary underline"> GALERIA </h2>
          &nbsp;&nbsp;
          <img src={ArrowRD} className="size-6 " alt="Seta" loading="lazy" decoding="async" />
        </div>
        <div className="grid grid-flow-row md:grid-cols-2 gap-3">
          {isLoadingImages && <div className="h-72 bg-cinza animate-pulse md:col-span-2" />}
          {!isLoadingImages && galleryImages.map((src, index) => (
            <img key={src} src={src} alt={`Imagem ${index + 1}`} loading="lazy" decoding="async" width="900" height="600" />
          ))}
        </div>
      </section>
      <br />
      <br />
      <hr className=" bg-white" />
      <section className=" hidden md:grid grid-cols-2 justify-center text-start mx-5 lg:mx-10 xl:mx-20 gap-3 justify-items-center justify-self-center items-center my-14">
        <div className="grid grid-flow-row gap-5">
          <h2 className="Michroma text-4xl lg:text-6xl text-white">DEIXE-NOS CONSTRUIR SEU
            <span className=" text-laranja-primary"> SONHO</span>
          </h2>
          <a href="https://api.whatsapp.com/send?phone=+5562991243743&text=Ol%C3%A1,%20A6%20Construtora!" target="_blank" rel="noreferrer" className="Sora text-white text-2xl p-4 rounded-full border text-center justify-self-start border-white hover:scale-105 hover:bg-laranja-primary hover:text-black cursor-pointer">Pedir Orçamento</a>
        </div>
        <img className="w-full h-max object-contain" src={Estrutura} alt="Estrutura" loading="lazy" decoding="async" />
      </section>
      <section className="grid md:hidden grid-flow-row justify-center text-center mx-3 gap-5 justify-items-center">
        <img src={Estrutura} alt="Estrutura" loading="lazy" decoding="async" />
        <h2 className="Michroma text-3xl text-white">DEIXE-NOS CONSTRUIR SEU
          <span className=" text-laranja-primary"> SONHO</span>
        </h2>
        <a href="https://api.whatsapp.com/send?phone=+5562991243743&text=Ol%C3%A1,%20A6%20Construtora!" target="_blank" rel="noreferrer" className="Sora min-w-60   text-white text-base p-4 rounded-full border border-white hover:scale-105 hover:bg-laranja-primary hover:text-black cursor-pointer ">Pedir Orçamento</a>
      </section>
    </>
  );
};

export default Projetos;
