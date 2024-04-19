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
            <section className="grid grid-flow-col border-t border-b border-white max-w-160">
                {/* Div vazia das bordas */}
                <div className="border-white border-e w-10"></div>
                {/* Div Slogan */}
                <div className="border-white border-e">
                    <div className="grid grid-flow-row border-white border-b">
                        <div className="my-28 mx-36">
                            {/* Slogan */}
                            <div className="grid grid-flow-row justify-center">
                                <h1 className="Michroma text-7xl leading-normal text- text-white">
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
                                    <p className=" Sora text-lg text-white content-center justify-self-center" >
                                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                                    <br />
                                </div>
                                {/* Botão Para Contato */}
                                <div className="grid">
                                    <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start text-lg text-nowrap p-5 hover:bg-laranja-primary duration-500 ">
                                        <div className="border border-white rounded-full">
                                            <img className="p-4 w-16 " src={ArrowRD} />
                                        </div>
                                        &nbsp;&nbsp;Contate nossa equipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fotos Principais Serviçoes */}
                    <div className="grid grid-cols-2  justify-items-center border-white border-e  me-5">
                        <div className="border  border-white my-10 max-w-96">
                            <img className=" grayscale  w-96 h-40" src={Obras} />
                            <div className="m-3">
                                <p className="Sora text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white my-10 max-w-96">
                            <img className=" grayscale w-96 h-40" src={Comercial} />
                            <div className="m-3">
                                <p className="Sora text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className=" grid grid-flow-col border-white border-e">
                    <img className="image-initial max-w-500 h-full p-10" src={Lateral} />
                </div>
                {/* Div vazia das bordas */}
                <div className="w-10"></div>

            </section>
            {/* Seção info numerica sobre a empresa */}
            <section className="grid max-w-160 my-20  grid-flow-col justify-center text-center text-white border-white border mx-10">
                <div className="m-8">
                    <h1 className="Michroma text-7xl">20 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-2xl">Colaboradores no Time</p>
                </div>
                <div className="m-8">
                    <h1 className="Michroma text-7xl">10 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-2xl">Projetos Concluídos</p>
                </div>
                <div className="m-8">
                    <h1 className="Michroma text-7xl">4 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-2xl">Anos de Experiência</p>
                </div>
            </section>
            <br />
            {/* Carrossel */}
            <section className="mx-10">
                <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                <Carousel data={data} />
            </section>
            <br/>
            {/* Como Trabalhamos */}
            <section className="grid grid-flow-row text-center mx-10">
                <div className="grid grid-flow-row my-28">
                <p className="Sora text-2xl text-laranja-primary">Como Trabalhamos</p>
                <h3 className="Michroma leading-snug text-white text-7xl ">DO PLANEJAMENTO<br/> À CONCRETIZAÇÃO</h3>
                </div>
                <div className="grid grid-flow-col">
                    <div > 
                    <iframe width="706" height="433" src="https://www.youtube.com/embed/3E_8kK9VFPs?controls=0" title="Pica-Pau em português | Compilação de episódios | Desenhos Animados | Pica Pau Antigo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="grid grid-flow-row border border-white text-start p-10 ms-5">
                        <h2 className=" text-white Michroma text-5xl">SOBRE NÓS</h2>
                        <p className=" text-white text-lg Sora break-words text-justify">Nosso foco principal é fornecer expertise profissional em todos os aspectos da construção, desde o planejamento e design até a execução e conclusão do projeto. Acreditamos que a excelência é alcançada através da combinação de conhecimento técnico, criatividade e atenção aos detalhes, e isso se reflete em cada projeto que realizamos.</p>
                        <div className="grid grid-flow-col justify-start ">
                        <h3 className="text-white text-2xl max-w-80 sora">Conheça os <span className=" text-laranja-primary">benefícios</span> de trabalhar com a equipe de especialistas da A6</h3>
                        <img className="border border-white rounded-full p-3 hover:bg-laranja-primary scale-105" src={ArrowD} />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* Como Construimos */}
        </>
    )
}

export default Home