import React from "react";
import ArrowRD from '../assets/icons/ArrowRD.svg'
import Carousel from "../components/carousel";
import data from '../data/carouseldata'
import ArrowD from '../assets/icons/ArrowD.svg'
import Lateral from '../assets/imgs/lateral.webp'
import Obras from '../assets/imgs/gerenciamento_obra.webp'
import Comercial from '../assets/imgs/galpao_comercial.webp'

const Home = () => {
    return (
        <>
            {/* Inicio da Home */}
            <section className="grid grid-flow-row md:grid-flow-col  border-t md:border-b border-white lg:max-w-160">
                {/* Div vazia das bordas */}
                <div className="border-white lg:border-e  lg:w-10"></div>
                {/* Div Slogan */}
                <div className="border-white md:border-e ">
                    <div className="grid grid-flow-row border-white border-b">
                        <div className="md:my-16 m-10 md:24 lg:my-28 lg:mx-36">
                            {/* Slogan */}
                            <div className="content-center grid grid-flow-row justify-center">
                                <h1 className="Michroma text-2xl sm:text-3xl md:text-5xl xl:text-7xl leading-normal text-white">
                                    SUA <br />
                                    FUNDAÇÃO<br />
                                    PARA O <br />
                                    <span className=" text-laranja-primary">
                                        FUTURO
                                    </span>
                                </h1>
                                <br />
                                {/* Texto sobre a empresa */}
                                <div className="grid">
                                    <p className=" Sora text-xs lg:text-lg text-white content-center justify-self-center" >
                                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                                    <br />
                                </div>
                                {/* Botão Para Contato */}
                                <div className="grid">
                                    <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start  text-base lg:text-lg text-nowrap p-2 md:p-5 hover:bg-laranja-primary duration-500 ">
                                        <div className="border border-white rounded-full">
                                            <img className="p-3 w-12 md:p-4 md:w-16 " src={ArrowRD} />
                                        </div>
                                        &nbsp;&nbsp;Contate nossa equipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fotos Principais Serviçoes */}
                    <div className="grid grid-flow-col justify-center gap-5  border-white md:border-e  lg:me-5">
                        <div className="border  border-white w-32 sm:w-36 my-10 max-w-96">
                            <img className=" grayscale w-32 sm:w-36 h-39 lg:w-96 lg:h-40" src={Obras} />
                            <div className="m-3">
                                <p className="Sora text-xs text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora text-xs cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white w-32 sm:w-36 my-10 max-w-96">
                            <img className=" grayscale w-32 sm:w-36 h-38  lg:w-96 lg:h-40" src={Comercial} />
                            <div className="m-3">
                                <p className="Sora text-xs text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-xs text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className="grid-flow-col md:grid hidden border-white md:border-e">
                    <img className="image-initial max-w-500 h-full p-10" src={Lateral} />
                </div>
                {/* Div vazia das bordas */}
                <div className="w-10"></div>

            </section>
            {/* Seção info numerica sobre a empresa */}
            <section className="grid max-w-160 md:my-20 grid-flow-row md:grid-flow-col justify-center text-center text-white border-white md:border md:mx-10">
                <div className="m-8">
                    <h1 className="Michroma text-6xl lg:text-7xl">20 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Colaboradores no Time</p>
                </div>
                <div className="m-8">
                    <h1 className="Michroma text-6xl lg:text-7xl">10 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Projetos Concluídos</p>
                </div>
                <div className="m-8">
                    <h1 className="Michroma text-6xl lg:text-7xl">4 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Anos de Experiência</p>
                </div>
                
            </section>
           <div className="grid md:hidden grid-flow-row relative">
                <hr className="border-white absolute w-7/12 md:hidden"/>
                <br className="md:hidden" />
                <hr className="border-white absolute w-7/12 top-7 end-0 md:hidden"/>
            </div> 
            <br />
            {/* Carrossel */}
            <section className="md:mx-10 justify-center grid md:justify-start">
                <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                <Carousel data={data} />
            </section>
            <br/>
            {/* Como Trabalhamos */}
            <section className="grid grid-flow-row text-center mx-10">
                <div className="grid grid-flow-row mt-28 mb-10 lg:my-28">
                <p className="Sora text-base md:text-2xl text-laranja-primary">Como Trabalhamos</p>
                <h3 className="Michroma leading-snug hidden text-white text-7xl ">DO PLANEJAMENTO<br/> À CONCRETIZAÇÃO</h3>
                <h3 className="Michroma leading-snug md:hidden text-center text-white text-2xl ">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h3>
                </div>
                <div className="grid grid-flow-row lg:grid-flow-col">
                    <div className="grid grid-flow-col justify-center" > 
                    <iframe className=" w-79 h-48" src="https://www.youtube.com/embed/3E_8kK9VFPs?controls=0" title="Pica-Pau em português | Compilação de episódios | Desenhos Animados | Pica Pau Antigo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="grid grid-flow-row gap-5 text-center border border-white lg:text-start p-5 lg:ms-5">
                        <h2 className=" text-white Michroma text-2xl lg:text-5xl">SOBRE NÓS</h2>
                        <p className=" text-white leading-loose text-xs lg:text-lg Sora break-words">Nosso foco principal é fornecer expertise profissional em todos os aspectos da construção, desde o planejamento e design até a execução e conclusão do projeto. Acreditamos que a excelência é alcançada através da combinação de conhecimento técnico, criatividade e atenção aos detalhes, e isso se reflete em cada projeto que realizamos.</p>
                        <div className="grid lg:grid-flow-col justify-center gap-5 justify-items-center lg:justify-start ">
                        <h3 className="text-white text-base lg:text-2xl max-w-80 sora">Conheça os <span className=" text-laranja-primary">benefícios</span> de trabalhar com a equipe de especialistas da A6</h3>
                        <img className="border border-white rounded-full p-3 size-14 hover:bg-laranja-primary hover:scale-105 cursor-pointer" src={ArrowD} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row justify-center my-16 gap-5">
                    <h2 className="Michroma text-2xl text-white text-center">POTIFOLIO DE <br/><span className=" text-laranja-primary">PROJETOS</span></h2>
                    <div className="grid grid-flow-row justify-items-center gap-5 p-3 border-white border">
                        <img  src="https://s3-alpha-sig.figma.com/img/bb37/e89c/4be1fdcc05ef0c3cbe69fe3bd7ee1431?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvbDNSeyeiUHfYsLVwvNng9yEe4Y9jvA-ihMNE5NqJzpaehDmZFJpUfcawz6FSlA3Lbc0PS9kXyXyYlxa6B2h341ewedKU9uCQSZHFlWhBKsi307qBbzHnusiWEmVheDKUV8HsdWZjP8CSx9lge3EEVvfK5f38~a9WzZf5oYQCeGGqWECucRadWRuPoU5QO3aPzVIh8O~qFAecsKkcStiSfYF~cnXs9V7sL6nTJro3uYyQgEO3imfAixiJPtjIxHu58CT8KgqzuZ0b0oiHMjL~UyoYvF3lhhaMK1jAzswyxGMZL~kAjfCw3Vx7MMPVmUEuNt8lsv9GAhLkOJGP~XTw__" className="max-w-79 grayscale hover:grayscale-0"/>
                        <h3 className="Michroma text-base text-white">GERENCIAMENTO DE OBRA</h3>
                        <p className="Sora text-xs text-white">Gerenciamento de obra</p>
                        <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm p-3">Orçamento</button>
                        <p className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer">+ Ver Galeria do Projeto</p>
                    </div>
                    <div className="grid grid-flow-row justify-items-center gap-5 p-3 border-white border">
                        <img  src="https://s3-alpha-sig.figma.com/img/bb37/e89c/4be1fdcc05ef0c3cbe69fe3bd7ee1431?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvbDNSeyeiUHfYsLVwvNng9yEe4Y9jvA-ihMNE5NqJzpaehDmZFJpUfcawz6FSlA3Lbc0PS9kXyXyYlxa6B2h341ewedKU9uCQSZHFlWhBKsi307qBbzHnusiWEmVheDKUV8HsdWZjP8CSx9lge3EEVvfK5f38~a9WzZf5oYQCeGGqWECucRadWRuPoU5QO3aPzVIh8O~qFAecsKkcStiSfYF~cnXs9V7sL6nTJro3uYyQgEO3imfAixiJPtjIxHu58CT8KgqzuZ0b0oiHMjL~UyoYvF3lhhaMK1jAzswyxGMZL~kAjfCw3Vx7MMPVmUEuNt8lsv9GAhLkOJGP~XTw__" className="max-w-79 grayscale hover:grayscale-0"/>
                        <h3 className="Michroma text-base text-white">GERENCIAMENTO DE OBRA</h3>
                        <p className="Sora text-xs text-white">Gerenciamento de obra</p>
                        <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm p-3">Orçamento</button>
                        <p className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer">+ Ver Galeria do Projeto</p>
                    </div>
                    <div className="grid grid-flow-row justify-items-center gap-5 p-3 border-white border">
                        <img  src="https://s3-alpha-sig.figma.com/img/bb37/e89c/4be1fdcc05ef0c3cbe69fe3bd7ee1431?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvbDNSeyeiUHfYsLVwvNng9yEe4Y9jvA-ihMNE5NqJzpaehDmZFJpUfcawz6FSlA3Lbc0PS9kXyXyYlxa6B2h341ewedKU9uCQSZHFlWhBKsi307qBbzHnusiWEmVheDKUV8HsdWZjP8CSx9lge3EEVvfK5f38~a9WzZf5oYQCeGGqWECucRadWRuPoU5QO3aPzVIh8O~qFAecsKkcStiSfYF~cnXs9V7sL6nTJro3uYyQgEO3imfAixiJPtjIxHu58CT8KgqzuZ0b0oiHMjL~UyoYvF3lhhaMK1jAzswyxGMZL~kAjfCw3Vx7MMPVmUEuNt8lsv9GAhLkOJGP~XTw__" className="max-w-79 grayscale hover:grayscale-0"/>
                        <h3 className="Michroma text-base text-white">GERENCIAMENTO DE OBRA</h3>
                        <p className="Sora text-xs text-white">Gerenciamento de obra</p>
                        <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm p-3">Orçamento</button>
                        <p className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer">+ Ver Galeria do Projeto</p>
                    </div>
                    <div className="grid grid-flow-row justify-items-center gap-5 p-3 border-white border">
                        <img  src="https://s3-alpha-sig.figma.com/img/bb37/e89c/4be1fdcc05ef0c3cbe69fe3bd7ee1431?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvbDNSeyeiUHfYsLVwvNng9yEe4Y9jvA-ihMNE5NqJzpaehDmZFJpUfcawz6FSlA3Lbc0PS9kXyXyYlxa6B2h341ewedKU9uCQSZHFlWhBKsi307qBbzHnusiWEmVheDKUV8HsdWZjP8CSx9lge3EEVvfK5f38~a9WzZf5oYQCeGGqWECucRadWRuPoU5QO3aPzVIh8O~qFAecsKkcStiSfYF~cnXs9V7sL6nTJro3uYyQgEO3imfAixiJPtjIxHu58CT8KgqzuZ0b0oiHMjL~UyoYvF3lhhaMK1jAzswyxGMZL~kAjfCw3Vx7MMPVmUEuNt8lsv9GAhLkOJGP~XTw__" className="max-w-79 grayscale hover:grayscale-0"/>
                        <h3 className="Michroma text-base text-white">GERENCIAMENTO DE OBRA</h3>
                        <p className="Sora text-xs text-white">Gerenciamento de obra</p>
                        <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm p-3">Orçamento</button>
                        <p className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer">+ Ver Galeria do Projeto</p>
                    </div>

                </div>
            </section>
            <br />
            {/* Como Construimos */}
        </>
    )
}

export default Home