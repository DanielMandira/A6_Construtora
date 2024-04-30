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
import email from '../assets/icons/email.svg'
import predioFinal from '../assets/imgs/predio_final.jpg'
import Obra1 from '../assets/imgs/Obra_1/Obra_1.3.jpg'
import Obra2 from '../assets/imgs/Obra_2/Obra_2.2.jpeg'
import Obra3 from '../assets/imgs/Obra_3/Obra_3.2.png'
import Obra4 from '../assets/imgs/Obra_4/Obra_4.1.jpeg'
import PhoneWhite from '../assets/icons/phone-white.svg'
import EmailWhite from '../assets/icons/email-white.svg'

const Home = () => {
    return (
        <>
            {/* Inicio da Home */}
            <section className="grid grid-flow-row md:grid-flow-col border-white md:border-b white">
                {/* Div vazia das bordas */}
                <div className="border-white md:border-e md:grid hidden  md:w-10"></div>
                {/* Div Slogan */}
                <div className="border-white md:border-e ">
                    <div className="flex flex-col border-white border-b">
                        <div className="m-10 md:m-16 lg:m-26 ">
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
                                    <p className=" Sora text-base text-white content-center justify-self-center" >
                                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                                    <br />
                                </div>
                                {/* Botão Para Contato */}
                                <div className="flex">
                                    <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start  text-base text-nowrap p-2 md:p-4 hover:bg-laranja-primary duration-300 ">
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
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-5 border-white lg:border-e lg:px-5  lg:me-5">
                        <div className="border border-white my-5 md:my-10 max-w-72 lg:max-w-88">
                            <img className=" object-cover grayscale" src={Obras} />
                            <div className="p-4">
                                <p className="Sora text-sm lg:text-base text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora text-sm lg:text-base cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white m:w-36 md:my-10 max-w-72 lg:max-w-88">
                            <img className=" object-cover grayscale" src={Comercial} />
                            <div className="p-4">
                                <p className="Sora text-sm lg:text-base text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-sm lg:text-base text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className="hidden md:flex flex-1 border-white md:border-e">
                    <img className=" object-cover md:max-w-79 lg:max-w-500 h-full md:p-5 lg:p-10" src={Lateral} />
                </div>
                {/* Div vazia das bordas */}
                <div className="hidden md:grid w-10"></div>

            </section>
            {/* Seção info numerica sobre a empresa */}
            <section className="grid my-20 grid-flow-row md:grid-flow-col justify-center text-center text-white border-white md:border px-10 lg:mx-20 xl-mx-36">
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
                <hr className="border-white absolute w-7/12 md:hidden" />
                <br className="md:hidden" />
                <hr className="border-white absolute w-7/12 top-7 end-0 md:hidden" />
            </div>
            <br />
            {/* Carrossel */}
            <section className="grid grid-flow-row mt-24  md:px-10 lg:px-20 xl:px-36 ">
                <div className="grid justify-center md:justify-start relative">
                    <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                </div>
                <div className="grid grid-flow-col">
                    <Carousel data={data} />
                </div>
            </section>
            <br />
            {/* Como Trabalhamos */}
            <section className="flex flex-col text-center px-10 lg:px-20 xl:px-36">
                <div className="flex flex-col mt-28 mb-10 lg:my-28">
                    <p className="Sora text-base md:text-2xl text-laranja-primary">Como Trabalhamos</p>
                    <h3 className="Michroma hidden md:grid text-white md:text-5xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug ">DO PLANEJAMENTO<br /> À CONCRETIZAÇÃO</h3>
                    <h3 className="Michroma leading-snug sm:leading-snug md:leading-snug lg:leading-snug md:hidden text-center text-white text-2xl ">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h3>
                </div>
                <div id="sobre" className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                    <div className="flex justify-center" >
                        <iframe className=" h-72 w-full md:h-96 lg:h-full" src="https://www.youtube.com/embed/NvTngF_wJfo" title="A6 Construtora - Vídeos Institucional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="flex flex-col gap-5 text-center border border-white md:text-start justify-self-center p-5">
                        <h2 className=" text-white Michroma text-2xl md:text-3xl lg:text-5xl">SOBRE NÓS</h2>
                        <p className=" text-white leading-loose text-base lg:text-lg Sora break-words">Nosso foco principal é fornecer expertise profissional em todos os aspectos da construção, desde o planejamento e design até a execução e conclusão do projeto. Acreditamos que a excelência é alcançada através da combinação de conhecimento técnico, criatividade e atenção aos detalhes, e isso se reflete em cada projeto que realizamos.</p>
                        <div className="grid lg:grid-flow-col justify-items-center gap-5 md:flex md:flex-row-reverse md:justify-start md:justify-self-start ">
                            <h3 className="text-white text-base md:text-2xl  sora">Conheça os <span className=" text-laranja-primary">benefícios</span> de trabalhar com a equipe de especialistas da A6</h3>
                            <a href='#beneficios' className="border border-white rounded-full lg:px-3 xl:px-2 xl:py-1" ><img className="p-2 size-14 lg:p-0 hover:bg-laranja-primary hover:scale-105 cursor-pointer" src={ArrowD} /></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Como Construimos */}
            <section className="hidden md:flex flex-col px-10 lg:px-20 xl:px-36 my-26">
                <div className="md:flex hidden flex-row justify-center lg:justify-between">
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
                <div className="lg:grid hidden grid-flow-col relative gap-x-5">
                    {/* Div laranja de Fundo Div 1*/}
                    <div className="absolute bg-laranja-primary size-20 z-0 top-66 -left-6"></div>

                    {/* Div laranja de Fundo Div 3*/}
                    <div className="absolute lg:grid hidden bg-laranja-primary size-20 z-10 -bottom-8 -right-8 content-center justify-center rotate-180"><img src={ArrowRD} className="size-12" /></div>
                    {/* Div 1 */}
                    <div className="bg-cinza relative z-10 grid p-16 content-evenly top-72">
                        <h3 className="Michroma text-start text-white text-3xl">PROJETOS <span className=" text-laranja-primary ">EXCLUSIVOS</span>
                        </h3>
                        <p className="Sora text-white text-start text-xl">Fazemos questão de personalizar nossos projetos para cada cliente, buscando garantir que cada detalhe seja tratado com alta  <span className="text-laranja-primary"> qualidade e eficiência.</span> Para isso, contamos com nossa equipe de especialistas!</p>

                    </div>
                    {/* Div 2 */}
                    <div className="bg-cinza z-10 relative w-414 h-450 top-32">
                        {/* Div laranja de Fundo Div 2*/}
                        <div className="absolute lg:grid  hidden bg-laranja-primary size-20 z-0 -top-6 -left-6"></div>
                        <h3 className="Michroma z-20 leading-snug text-laranja-primary absolute top-36 left-12 text-7xl">TRAN<br />SPAR<br />ÊNCIA
                        </h3>
                        <img className="z-10 relative object-contain " src={Gerenciamento} />
                    </div>
                    {/* Div 3 */}
                    <div className="bg-cinza relative z-0 grid p-16 content-evenly ">
                        <h3 className="Michroma text-white text-start text-3xl">
                            <span className="text-laranja-primary">MAIS</span>
                            DO QUE CONSTRUIR
                        </h3>
                        <p className="Sora text-white text-start text-xl">Estamos sempre empenhados em entender suas necessidades específicas e em oferecer soluções personalizadas que atendam não apenas aos requisitos técnicos, mas também às suas<span className="text-laranja-primary"> visões e objetivos.</span></p>
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
            {/* Portifolio de projetos */}
            <section id="projetos" className="flex flex-col md:flex-row items-center md:items-stretch  xl:grid xl:grid-cols-2 my-16 gap-5 lg:mt-56 md:justify-start px-10 lg:px-20 xl:px-36">
                <div className="flex flex-col gap-5 justify-end">
                    {/* Titulo */}
                    <div className="flex flex-col">
                        <h2 className="Michroma text-2xl md:text-3xl lg:text-5xl text-white text-center md:text-start">POTIFOLIO DE <br /><span className=" text-laranja-primary">PROJETOS</span></h2>
                        <br />
                        <p className="Sora text-white hidden lg:grid text-start">Vislumbre o que podemos fazer!</p>
                    </div>
                    {/* Projeto 1 */}
                    <div className="grid grid-flow-row justify-items-center justify-self-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start border-white border  max-w-88 lg:max-w-full ">
                        <div className="justify-self-center relative grid ">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra1} className="grayscale hover:grayscale-0 duration-300  object-contain size-full " />
                        </div>
                        <div className="grid gap-5">
                            <h3 className="Michroma text-base text-white lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GERENCIAMENTO DE OBRA</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 2 */}
                    <div className="grid grid-flow-row justify-items-center justify-self-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start border-white border  max-w-88 lg:max-w-full">
                        <div className="justify-self-center relative grid ">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra2} className="grayscale hover:grayscale-0 duration-300 size-full" />
                        </div>
                        <div className="grid gap-5">
                            <h3 className="Michroma text-base text-white md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">ADEQUAÇÃO DE SALA COMERCIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Projeto 3 */}
                <div className="grid grid-flow-row gap-5">
                    <div className="grid grid-flow-row justify-items-center justify-self-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start border-white border  max-w-88 lg:max-w-full ">
                        <div className="justify-self-center  relative grid ">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra3} className="grayscale hover:grayscale-0 duration-300 size-full" />
                        </div>
                        <div className="grid gap-0">
                            <h3 className="Michroma text-base text-white lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GALPÃO <br /> INDUSTRIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                    {/* Pojeto 4 */}
                    <div className="grid grid-flow-row justify-items-center justify-self-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start border-white border  max-w-88 lg:max-w-full">
                        <div className="justify-self-center  relative grid ">
                            {/* Mouse Hover Icon */}
                            <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                <img className="size-4 md:size-8 lg:size-14 opacity-50 hidden md:grid" src={Mouse} />
                                <p className=" sora text-xs text-white opacity-50 hidden md:grid">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            {/* A6 Icon */}
                            <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8 opacity-50 hidden md:grid">
                                <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                            </div>
                            <img src={Obra4} className="grayscale hover:grayscale-0 duration-300 size-full" />
                        </div>
                        <div className="grid gap-0">
                            <h3 className="Michroma text-base text-white lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">REFORMA DE <br /> APARTAMENTO</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Imagens para celular */}
            <section className="my-10 flex flex-row items-center justify-center gap-2 md:hidden ">
                <div className="flex flex-1">
                    <img className="w-full h-24 object-cover object-left-bottom" src={predioFinal} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <img className="w-full h-24 object-cover object-right-top" src={predioFinal} />
                    <img className="w-full h-24 object-cover object-left" src={predioFinal} />
                </div>
            </section>
            <br />
            <section id="beneficios" className="flex flex-1 flex-col lg:flex-row px-10 lg:px-20 xl:px-36">
                <div className="flex flex-col justify-center">
                    <p className="Sora md:grid hidden  text-center lg:text-start text-laranja-primary text-2xl"> Benefícios</p>
                    <h2 className="Michroma text-white text-center lg:text-start text-2xl lg:text-7xl">SEU <br className="hidden lg:flex" />PROJETO, <br /> NOSSA <span className="text-laranja-primary">EXPERTISE</span></h2>
                </div>
                <div className="flex flex-row flex-auto" >
                    <CarouselBeneficios data={dataBene} />
                </div>
            </section>
            <br />
            {/* Seção Construir Sonho */}
            <section id="contato" className="flex text-center lg:text-start justify-center flex-row  lg:grid lg:grid-cols-2 gap-5 lg:border lg:border-white lg:my-28 top-20 mx-10 px-5 lg:mx-20 xl:mx-36">
                <div className="flex flex-auto relative ">
                    <img className="z-10 h-749 absolute -bottom-0  overflow-visible hidden lg:flex" src={predioFinal} />
                </div>
                <div className="grid grid-flow-row gap-10 p-10">
                    <h2 className="Michroma text-2xl text-white md:text-4xl lg:text-5xl">DEIXE-NOS <span className=" text-laranja-primary">CONSTRUIR</span><br /> SEU SONHO</h2>
                    <p className="Sora text-white text-sm md:text-base">Peça seu orçamento agora! Sinta-se a vontade para entrar em contato com o nosso time, ficamos felizes de tirar suas dúvidas ou discutir seu próximo projeto!</p>
                    <div className="grid grid-flow-row md:grid-flow-col gap-5 content-center items-center">
                        <button className="Sora lg:grid hidden grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 text-xl"><img className="size-8" src={Whatsapp} /> &nbsp;&nbsp;Conversar no WhatsApp</button>
                        <button className="Sora hidden lg:grid grid-flow-col  justify-center border border-white text-white items-center rounded-full p-5 hover:scale-105 duration-300 text-xl"><img className="w-10" src={QrCode} /> &nbsp;&nbsp; Escanear QrCode</button>
                    </div>
                    <div className="lg:grid grid-flow-row justify-center md:grid-cols-2 justify-items-start hidden">
                        <div className="grid grid-flow-col items-center">
                            <button className="rounded-full p-2 m-2  bg-laranja-primary cursor-pointer"><img className="size-10 stroke-white" src={phone} /></button>
                            <p className="text-white text-xl">(62) 99124-3743</p>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="rounded-full p-2 m-2  bg-laranja-primary cursor-pointer"><img className="size-10" src={instagram} /></button>
                            <p className="text-white text-xl">@a6construtora</p>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="rounded-full p-2 m-2  bg-laranja-primary cursor-pointer text-wrap"><svg className="size-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.456 84.992H492.544L501.76 89.088L508.928 95.232L512 103.424V408.576L508.928 415.744L501.76 423.936L492.544 427.008H19.456L10.24 422.912L3.072 416.768L0 408.576V103.424L4.096 95.232L10.24 88.064L19.456 84.992ZM39.936 105.472L45.056 110.592L60.416 122.88L70.656 130.048L80.896 137.216H82.944L83.968 140.288L103.424 154.624L124.928 171.008L136.192 179.2L155.648 193.536L168.96 203.776L183.296 215.04L190.464 219.136L208.896 233.472H210.944L211.968 236.544L223.232 244.736L242.688 259.072L252.928 262.144L263.168 261.12L272.384 257.024L293.888 240.64L301.056 235.52V233.472L305.152 231.424L324.608 217.088L331.776 212.992L343.04 203.776L361.472 189.44L380.928 175.104L387.072 171.008L405.504 156.672L424.96 142.336L435.2 134.144L445.44 126.976L464.896 112.64L472.064 106.496V105.472H39.936ZM20.48 119.808V389.12L22.528 388.096V386.048L25.6 385.024L33.792 374.784L45.056 360.448L48.128 355.328L51.2 352.256L57.344 344.064L62.464 338.944L76.8 321.536L88.064 307.2L102.4 289.792L113.664 275.456L128 258.048L130.048 253.952L140.288 252.928L145.408 254.976L147.456 258.048V266.24L143.36 272.384L130.048 288.768L118.784 303.104L109.568 314.368L96.256 330.752L91.136 336.896V338.944L87.04 340.992L82.944 346.112L79.872 351.232L66.56 367.616L56.32 380.928L51.2 386.048L40.96 398.336L37.888 403.456L36.864 406.528H476.16L472.064 401.408L468.992 396.288L457.728 381.952L452.608 376.832L443.392 365.568L430.08 349.184L427.008 344.064L422.912 338.944H420.864L418.816 334.848L409.6 323.584L396.288 307.2L385.024 292.864L370.688 275.456L364.544 266.24V258.048L368.64 253.952L376.832 252.928L381.952 253.952L384 258.048L395.264 271.36L406.528 285.696L417.792 299.008L428.032 312.32L442.368 329.728L450.56 339.968L453.632 344.064H455.68L457.728 349.184L462.848 354.304L471.04 365.568L484.352 381.952L487.424 386.048H489.472L490.496 389.12H491.52V119.808L484.352 124.928L477.184 129.024L466.944 137.216L448.512 151.552L429.056 165.888L417.792 174.08L396.288 190.464L376.832 204.8L370.688 209.92L361.472 216.064L339.968 232.448L328.704 241.664L313.344 252.928L306.176 257.024L294.912 266.24L281.6 276.48L273.408 280.576L265.216 282.624H246.784L236.544 279.552L226.304 273.408L216.064 265.216L202.752 254.976L191.488 247.808L173.056 233.472L161.792 224.256L143.36 210.944L133.12 203.776L121.856 194.56L102.4 180.224L89.088 169.984L77.824 161.792L58.368 147.456L45.056 137.216L33.792 128L23.552 121.856L20.48 119.808Z" fill="black" />
                            </svg>
                            </button>
                            <p className="text-white text-xl">contato@a6construtora.com</p>
                        </div>
                    </div>
                    <div className="grid grid-flow-row justify-center md:grid-cols-2 justify-self-center justify-items-center lg:hidden gap-5">
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-80"><img className="size-8" src={Whatsapp} /> &nbsp; WhatsApp</button>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-80">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                <p className="text-white text-xl">&nbsp;&nbsp;Instagram</p>
                            </button>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-80">
                                <img className="size-10 fill-white" src={PhoneWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;Salvar Contato</p>
                            </button>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-80">
                                <img className="size-10 fill-white" src={EmailWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;Enviar Email</p>
                            </button>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home