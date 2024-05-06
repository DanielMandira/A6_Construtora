import React from "react";
import ArrowRD from '../assets/icons/ArrowRD.svg'
import Carousel from "../components/carousel";
import CarouselBeneficios from "../components/carouselBeneficios";
import data from '../data/carouseldata'
import dataBene from '../data/carouselBeneficios'
import ArrowD from '../assets/icons/ArrowD.svg'
import Lateral from '../assets/imgs/lateral.webp'
import Obras from '../assets/imgs/gerenciamento_obra.webp'
import Comercial from '../assets/imgs/galpao_comercial.webp'
import Gerenciamento from '../assets/imgs/gerenciamento_projetos.webp'
import Mouse from '../assets/icons/mouse.svg'
import Whatsapp from '../assets/icons/whatsapp.svg'
import QrCode from '../assets/icons/qrcode.svg'
import phone from '../assets/icons/phone.svg'
import instagram from '../assets/icons/instagram.svg'
import predioFinal from '../assets/imgs/predio_final.webp'
import Obra1 from '../assets/imgs/Obra_1/Obra_1.3.webp'
import Obra2 from '../assets/imgs/Obra_2/Obra_2.2.webp'
import Obra3 from '../assets/imgs/Obra_3/Obra_3.2.webp'
import Obra4 from '../assets/imgs/Obra_4/Obra_4.1.webp'
import PhoneWhite from '../assets/icons/phone-white.svg'
import EmailWhite from '../assets/icons/email-white.svg'
import { Link } from "react-router-dom";

const Home = () => {
    function copiarTexto (texto){
        var input = document.createElement('input');
        input.value = texto;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
    return (
        <section className="grid grid-flow-row justify-center">
            {/* Inicio da Home */}
            <section className="grid grid-flow-row md:grid-flow-col border-white md:border-b white">
                {/* Div vazia das bordas */}
                <div className="border-white md:border-e md:grid hidden  md:w-5 lg:w-10"></div>
                {/* Div Slogan */}
                <div className="border-white md:border-e ">
                    <div className="flex flex-col border-white border-b">
                        <div className="m-5 md:m-8 lg:m-22 ">
                            {/* Slogan */}
                            <div className="content-center flex flex-col justify-center">
                                <h1 className="Michroma text-2xl sm:text-3xl md:text-5xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug  text-white font-bold">
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
                                    <p className=" Sora text-base text-white content-center justify-self-center " >
                                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                                    <br />
                                </div>
                                {/* Botão Para Contato */}
                                <div className="flex">
                                    <a href="#contato" className="flex Sora items-center border text-white border-white rounded-full  justify-self-start  text-base text-nowrap p-2 md:p-4 hover:bg-laranja-primary duration-300 ">
                                        <div className="border border-white rounded-full">
                                            <img className="p-3 w-10 md:p-4 md:w-16 " src={ArrowRD} />
                                        </div>
                                        &nbsp;&nbsp;Contate nossa equipe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fotos Principais Serviçoes */}
                    <div className="grid grid-flow-row md:grid-flow-col md:gap-3 justify-items-center p-5 gap-y-5 lg:me-4 xl:me-6 lg:border-e border-white">
                        <div className="border border-white">
                            <img className="object-cover grayscale" src={Obras} />
                            <div className="p-4">
                                <p className="Sora text-sm lg:text-base text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora text-sm lg:text-base cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white">
                            <img className=" object-cover grayscale" src={Comercial} />
                            <div className="p-4">
                                <p className="Sora text-sm lg:text-base text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-sm lg:text-base text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className="hidden md:grid items-center border-white border-e p-3 md:col-span-6 lg:col-span-4 xl:col-span-1">
                    <img className=" object-cover h-full" src={Lateral} />
                </div>
                {/* Div vazia das bordas */}
                <div className="hidden md:grid md:w-5 lg:w-10"></div>
            </section>


            {/* Seção info numerica sobre a empresa */}
            <section className="grid grid-flow-row md:grid-flow-col my-16 md:border md:mx-5 lg:mx-10 xl:mx-20 text-white justify-center text-center ">
                <div className="p-5">
                    <h1 className="Michroma text-6xl lg:text-7xl">20 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Colaboradores no Time</p>
                </div>
                <div className="p-5">
                    <h1 className="Michroma text-6xl lg:text-7xl">10 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Projetos Concluídos</p>
                </div>
                <div className="p-5">
                    <h1 className="Michroma text-6xl lg:text-7xl">4 <span className=" text-laranja-primary">+</span></h1>
                    <p className="Sora text-xl lg:text-2xl">Anos de Experiência</p>
                </div>
            </section>

            {/* Linha Mobile */}
            <section className="grid md:hidden grid-flow-row relative">
                <hr className="border-white absolute w-7/12 md:hidden" />
                <br className="md:hidden" />
                <hr className="border-white absolute w-7/12 top-7 end-0 md:hidden" />
            </section>
            <br />
            {/* Carrossel */}
            <section className="grid grid-flow-row md:px-5 lg:px-10 xl:px-20 ">
                <div className="grid justify-center md:justify-start relative">
                    <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                </div>
            </section>
                <Carousel data={data} />
            <br />
            {/* Como Trabalhamos */}
            <section className="gird px-5 lg:px-10 xl:px-20 grid-flow-col text-center ">
                <div className="flex flex-col mt-28 mb-10 lg:my-28">
                    <p className="Sora text-base md:text-2xl text-laranja-primary">Como Trabalhamos</p>
                    <h3 className="Michroma hidden md:grid text-white md:text-5xl xl:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug ">DO PLANEJAMENTO<br /> À CONCRETIZAÇÃO</h3>
                    <h3 className="Michroma leading-snug sm:leading-snug md:leading-snug lg:leading-snug md:hidden text-center text-white text-2xl ">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h3>
                </div>
                <div id="sobre" className="grid grid-flow-row lg:grid lg:grid-cols-2 gap-3">
                    <div className="flex justify-center" >
                        <iframe className=" h-72 w-full md:h-96 lg:h-full" src="https://www.youtube.com/embed/NvTngF_wJfo" title="A6 Construtora - Vídeos Institucional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="grid grid-flow-row gap-5 text-center border border-white md:text-start justify-self-center p-5">
                        <h2 className=" text-white Michroma text-2xl md:text-3xl lg:text-5xl">SOBRE NÓS</h2>
                        <p className=" text-white leading-loose text-base lg:text-lg Sora break-words">Nosso foco principal é fornecer expertise profissional em todos os aspectos da construção, desde o planejamento e design até a execução e conclusão do projeto. Acreditamos que a excelência é alcançada através da combinação de conhecimento técnico, criatividade e atenção aos detalhes, e isso se reflete em cada projeto que realizamos.</p>
                        <div className="grid lg:grid-flow-col justify-items-center gap-5 md:justify-start md:justify-self-start ">
                            <h3 className="text-white text-base md:text-2xl  sora">Conheça os <span className=" text-laranja-primary">benefícios</span> de trabalhar com a equipe de especialistas da A6</h3>
                            <a href='#beneficios' className="border border-white rounded-full  grid self-center  hover:bg-laranja-primary hover:scale-105 " ><img className="size-14 lg:size-16 p-3 cursor-pointer" src={ArrowD} /></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Como Construimos */}
            <section className="grid px-5 lg:px-10 xl:px-20 my-16 lg:my-36">
                <div className="md:grid hidden grid-flow-col justify-center lg:justify-between">
                    <div className=" md:grid hidden my-10 grid-flow-row text-center lg:text-start ">
                        <h1 className="Michroma text-white text-3xl lg:text-5xl lg:leading-snug   ">COMO <br className="hidden lg:grid" />CONSRUÍMOS?</h1>
                    </div>
                    {/* Div Botoes */}
                    <div className="hidden lg:grid grid-flow-col max-h-2 gap-x-5 relative top-16">
                        <a href="#contato" className="Sora hover:scale-105 duration-300 text-black bg-laranja-primary rounded-full p-3">Entrar em contato</a>
                        <a href="#beneficios" className="Sora hover:scale-105 duration-300 text-white border-white border rounded-full p-3">Ver + beneficios</a>
                    </div>
                </div>
                {/* Divs posições diferentes */}
                <div className="lg:grid hidden grid-cols-3 relative gap-x-2">

                    {/* Div laranja de Fundo Div 1*/}
                    <div className="absolute bg-laranja-primary size-20 z-0 top-66 -left-6"></div>
                    {/* Div 1 */}
                    <div className="bg-cinza relative z-10 grid p-10 content-evenly top-72">
                        <h3 className="Michroma text-start text-white lg:text-2xl xl:text-3xl 2xl:text-5xl">PROJETOS <span className=" text-laranja-primary ">EXCLUSIVOS</span>
                        </h3>
                        <p className="Sora text-white text-start text-xl 2xl:text-3xl">Fazemos questão de personalizar nossos projetos para cada cliente, buscando garantir que cada detalhe seja tratado com alta  <span className="text-laranja-primary"> qualidade e eficiência.</span> Para isso, contamos com nossa equipe de especialistas!</p>

                    </div>
                    {/* Div 2 */}
                    <div className="bg-cinza z-10 relative top-32">
                        {/* Div laranja de Fundo Div 2*/}
                        <div className="absolute lg:grid  hidden bg-laranja-primary size-20 z-0 -top-6 -left-6"></div>
                        <h3 className="Michroma z-20 leading-normal text-center text-laranja-primary absolute top-32 lg:top-24  lg:left-8 xl:left-10 2xl:left-32 justify-center lg:text-6xl xl:text-7xl xl:leading-relaxed lg:leading-relaxed">TRAN<br />SPAR<br />ÊNCIA
                        </h3>
                        <img className="z-10 h-full w-full max-h-112 relative object-cover " src={Gerenciamento} />
                    </div>
                    {/* Div 3 */}
                    <div className="bg-cinza relative z-0 grid p-10 content-evenly ">
                        {/* Div laranja de Fundo Div 3*/}
                        <div className="absolute lg:grid hidden bg-laranja-primary size-20 z-10 -bottom-6 -right-6 content-center justify-center rotate-180"><img src={ArrowRD} className="size-12" /></div>
                        <h3 className="Michroma text-white text-start  lg:text-2xl xl:text-3xl 2xl:text-5xl">
                            <span className="text-laranja-primary">MAIS</span>
                            DO QUE CONSTRUIR
                        </h3>
                        <p className="Sora text-white text-start text-xl 2xl:text-3xl">Estamos sempre empenhados em entender suas necessidades específicas e em oferecer soluções personalizadas que atendam não apenas aos requisitos técnicos, mas também às suas<span className="text-laranja-primary"> visões e objetivos.</span></p>
                    </div>
                </div>

                {/* Versão Tablet */}
                <div className="md:grid lg:hidden hidden grid-flow-col relative gap-3">
                    {/* Div laranja de Fundo Div 1*/}
                    <div className="absolute bg-laranja-primary size-20 z-0 -top-5 -left-5"></div>
                    {/* Div 2 */}
                    <div className="bg-cinza z-10 relative w-414 h-auto ">
                        <h3 className="Michroma leading-snug text-laranja-primary absolute top-36 left-12 text-7xl">TRAN<br />SPAR<br />ÊNCIA
                        </h3>
                        <img className=" object-cover h-full" src={Gerenciamento} />
                    </div>

                    <div className="grid grid-flow-row gap-5">

                        {/* Div 3 */}
                        <div className="bg-cinza relative z-0 grid p-10 content-evenly ">
                            <h3 className="Michroma text-white text-start text-xl">
                                <span className="text-laranja-primary">MAIS</span>
                                DO QUE CONSTRUIR
                            </h3>
                            <p className="Sora text-white text-start text-sm">Estamos sempre empenhados em entender suas necessidades específicas e em oferecer soluções personalizadas que atendam não apenas aos requisitos técnicos, mas também às suas<span className="text-laranja-primary"> visões e objetivos.</span></p>
                        </div>
                        {/* Div 1 */}
                        <div className="bg-cinza relative z-10 grid p-10 content-evenly">
                            <h3 className="Michroma text-start text-white text-xl">PROJETOS <span className=" text-laranja-primary ">EXCLUSIVOS</span>
                            </h3>
                            <p className="Sora text-white text-start text-sm">Fazemos questão de personalizar nossos projetos para cada cliente, buscando garantir que cada detalhe seja tratado com alta  <span className="text-laranja-primary"> qualidade e eficiência.</span> Para isso, contamos com nossa equipe de especialistas!</p>

                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            {/* Portifolio de projetos */}
            <section id="projetos" className="grid grid-flow-row md:grid-flow-col px-5 lg:px-10 xl:px-20 mb:my-10 lg:my-36 md:gap-3 justify-center justify-self-center gap-3">
                <div className="grid grid-flow-col justify-end gap-3">
                    <div className="flex flex-col gap-5 justify-end">
                        {/* Titulo */}
                        <div className="flex flex-col">
                            <h2 className="Michroma text-2xl md:text-3xl lg:text-5xl text-white text-center md:text-start">POTIFOLIO DE <br /><span className=" text-laranja-primary">PROJETOS</span></h2>
                            <br />
                            <p className="Sora text-white hidden lg:grid text-start">Vislumbre o que podemos fazer!</p>
                        </div>
                        {/* Projeto 1 */}
                        <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
                            <div className="grid relative">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra1} className="grayscale hover:grayscale-0 object-cover duration-300 h-full md:max-w-full w-auto" />
                            </div>
                            <div className="grid gap-2 text-center md:text-start">
                                <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GERENCIAMENTO DE OBRA</h3>
                                <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                                <div className="grid md:grid-flow-col self-center items-center gap-3">
                                    <a href="#contato" className="Sora justify-self-center cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                                    <Link to="/Projetos/1" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
                                </div>
                            </div>
                        </div>
                        {/* Projeto 2 */}
                        <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
                            <div className="grid relative">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra2} className="grayscale hover:grayscale-0 duration-300 object-cover h-full md:max-w-full"  />
                            </div>
                            <div className="grid gap-3 text-center md:text-start ">
                                <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">ADEQUAÇÃO DE SALA COMERCIAL</h3>
                                <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                                <div className="grid md:grid-flow-col self-center items-center gap-5">
                                    <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                                    <Link to="/Projetos/2" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row gap-5">
                    {/* Projeto 3 */}
                    <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
                        <div className="grid relative">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra3} className="grayscale hover:grayscale-0 duration-300 object-cover h-full w-auto md:max-w-full" />
                        </div>
                        <div className="grid gap-3 text-center md:text-start ">
                            <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GALPÃO <br /> INDUSTRIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                                <Link to="/Projetos/3"  className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
                            </div>
                        </div>
                    </div>
                    {/* Pojeto 4 */}
                    <div className="grid grid-flow-row max-w-500 xl:max-w-655 gap-5 p-3 border-white border">
                        <div className="grid relative">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra4} className="grayscale hover:grayscale-0 duration-300 object-cover h-full md:max-w-full" />
                        </div>
                        <div className="grid gap-3 text-center md:text-start ">
                            <h3 className="Michroma text-base text-white md:text-xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">REFORMA DE <br /> APARTAMENTO</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <a href="#contato" className="Sora cursor-pointer bg-laranja-primary rounded-full text-black justify-self-center text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</a>
                                <Link to="/Projetos/4"  className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Imagens para celular */}
            <section className="grid md:hidden grid-flow-col  gap-3 my-16 items-center">
                <div className="flex flex-1">
                    <img className="w-full h-24 object-cover object-left-bottom" src={predioFinal} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <img className="w-full h-24 object-cover object-right-top" src={predioFinal} />
                    <img className="w-full h-24 object-cover object-left" src={predioFinal} />
                </div>
            </section>
            <br />
            <section id="beneficios" className="grid grid-flow-row lg:grid-flow-col mx-5 lg:mx-10 xl:mx-20 gap-3 justify-center lg:justify-between my-16 ">
                <div className="flex flex-col justify-center">
                    <p className="Sora md:grid hidden  text-center lg:text-start text-laranja-primary text-2xl"> Benefícios</p>
                    <h2 className="Michroma text-white text-center lg:text-start text-2xl lg:text-5xl xl:text-7xl leading-normal md:leading-normal sm:leading-normal lg:leading-normal xl:leading-normal">SEU <br className="hidden lg:flex" />PROJETO, <br /> NOSSA <span className="text-laranja-primary"><br className="flex md:hidden lg:flex" /> EXPERTISE</span></h2>
                </div>
                <div className="flex flex-row flex-auto justify-self-center" >
                    <CarouselBeneficios data={dataBene} />
                </div>
            </section>
            <br />
            {/* Seção Construir Sonho */}
            <section id="contato" className="grid grid-flow-row px-5 lg:px-5 lg:mx-10 xl:mx-20 text-center lg:grid-cols-2 lg:text-start lg:border border-white lg:mt-36 xl:mt-48 ">
                <div className="grid relative">
                    <img className="z-10 lg:h-725 xl:h-749 absolute -bottom-0  overflow-visible object-center hidden lg:flex" src={predioFinal} />
                </div>
                <div className="grid grid-flow-row gap-3 p-5">
                    <h2 className="Michroma text-2xl text-white md:text-4xl xl:text-5xl">DEIXE-NOS <span className=" text-laranja-primary">CONSTRUIR</span><br /> SEU SONHO</h2>
                    <p className="Sora text-white text-sm md:text-base">Peça seu orçamento agora! Sinta-se a vontade para entrar em contato com o nosso time, ficamos felizes de tirar suas dúvidas ou discutir seu próximo projeto!</p>
                    <div className="grid grid-flow-row md:grid-flow-col gap-5 content-center items-center">
                        <button className="Sora lg:grid hidden grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 lg:text-lg xl:text-xl"><img className="size-10" src={Whatsapp} /> &nbsp;&nbsp;Conversar no WhatsApp</button>
                        <button className="Sora hidden lg:grid grid-flow-col  justify-center border border-white text-white items-center rounded-full p-5 hover:scale-105 duration-300 lg:text-lg xl:text-xl"><img className="size-10" src={QrCode} /> &nbsp;&nbsp; Escanear QrCode</button>
                    </div>
                    <div className="lg:grid grid-flow-row justify-center md:grid-cols-2 justify-items-start hidden">
                        <div className="grid grid-flow-col items-center">
                            <button onClick={()=>{
                                copiarTexto('+5513991243743')
                                window.alert("Texto copiado para a área de transferência!")
                                }} className="rounded-full p-2 m-2 size-12 content-center hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10 stroke-white" src={phone} /></button>
                            <p className="text-white lg:text-lg xl:text-xl">(62) 99124-3743</p>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <a className="rounded-full content-center p-2 m-2 size-12 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10" src={instagram} /></a>
                            <p className="text-white lg:text-lg xl:text-xl">@a6construtora</p>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <a href="mailto:contato@a6construtora.com" className="rounded-full content-center size-12 p-2 m-2  hover:scale-105 bg-laranja-primary cursor-pointer text-wrap">
                            <img className="size-10 brightness-0" src={EmailWhite} />
                            </a>
                            <p className="text-white lg:text-lg xl:text-xl">contato@a6construtora.com</p>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className="grid grid-flow-row  md:grid-cols-2 lg:hidden gap-3">
                        <div className="grid grid-flow-col  items-center">
                            <button onClick={()=>{
                                copiarTexto('+5513991243743')
                                }} className="Sora grid grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 min-w-full text-xl"><img className="size-8" src={Whatsapp} /> &nbsp; WhatsApp</button>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 min-w-full text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                <p className="text-white text-xl">&nbsp;&nbsp;Instagram</p>
                            </button>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <a href="/A6Construtora.vcf" className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 min-w-full text-xl">
                                <img className="size-10 fill-white" src={PhoneWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;Salvar Contato</p>
                            </a>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <a href="mailto:contato@a6construtora.com" className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 min-w-full text-xl">
                                <img className="size-10 fill-white" src={EmailWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;Enviar Email</p>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home