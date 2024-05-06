import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetosData from '../data/projetosData'
const Projetos = () => {
  const { id } = useParams(); // Obtém o ID da URL
    const projeto = ProjetosData.find(projeto => projeto.id === parseInt(id));

  if (!projeto) {
    return <div>
      <h3 className='Sora Text-xl text-white text-center justify-center m-36 '>Não foi encontrada nenhuma obra com o ID fornecido.</h3>
    </div>;
  }
  const segundaImagem = projeto.img[1];
  return (
    <>
    <section>
      <img className='w-full' src={segundaImagem.src}/>
    </section>
      <h2>Obra ID: {projeto.id}</h2>
      <h3>Título: {projeto.titulo}</h3>
      <div>
      
        {/* Mapeia e exibe as imagens da obra */}
        {projeto.img.map((imagem, index) => (
          <img key={index} src={imagem.src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
      </>
  );
}

export default Projetos;