import React from 'react';
import { useParams } from 'react-router-dom';
import obrasData from '../data/obrasData';

function Obras() {
  const { id } = useParams(); // Obtém o ID da URL
    const obra = obrasData.find(obra => obra.id === parseInt(id));

  if (!obra) {
    return <div>Não foi encontrada nenhuma obra com o ID fornecido.</div>;
  }

  return (
    <div>
      <h1>Tela de Obras</h1>
      <h2>Obra ID: {obra.id}</h2>
      <h3>Título: {obra.titulo}</h3>
      <div>
        {/* Mapeia e exibe as imagens da obra */}
        {obra.img.map((imagem, index) => (
          <img key={index} src={imagem.src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Obras;