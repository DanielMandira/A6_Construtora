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
                    <div className="grid grid-flow-row border-white border-b">
                        <div className="md:my-16 m-10 md:24 lg:my-28 lg:mx-36">
                            {/* Slogan */}
                            <div className="content-center grid grid-flow-row justify-center">
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
                                    <p className=" Sora text-xs md:text-base text-white content-center justify-self-center" >
                                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                                    <br />
                                </div>
                                {/* Botão Para Contato */}
                                <div className="grid">
                                    <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start  text-base text-nowrap p-2 md:p-5 hover:bg-laranja-primary duration-300 ">
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
                    <div className="grid grid-flow-col justify-around md:justify-center gap-5 p-10 border-white lg:border-e  lg:me-5">
                        <div className="border border-white my-10 max-w-88">
                            <img className=" object-cover grayscale" src={Obras} />
                            <div className="p-4">
                                <p className="Sora text-xs md:text-sm lg:text-base text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora text-xs md:text-sm lg:text-base cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white m:w-36 my-10 max-w-88">
                            <img className=" object-cover grayscale" src={Comercial} />
                            <div className="p-4">
                                <p className="Sora text-xs md:text-sm lg:text-base text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-xs md:text-sm lg:text-base text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className="grid-flow-col md:grid hidden border-white md:border-e">
                    <img className=" object-cover md:max-w-79 lg:max-w-500 h-full p-10" src={Lateral} />
                </div>
                {/* Div vazia das bordas */}
                <div className="hidden md:grid w-10"></div>

            </section>
            {/* Seção info numerica sobre a empresa */}
            <section className="grid my-20 grid-flow-row md:grid-flow-col justify-center text-center text-white border-white md:border mx-32">
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
            <section className="mx-32 grid grid-flow-row mt-24 ">
                <div className="grid justify-center md:justify-start">
                    <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                </div>
                <div className="grid grid-flow-col">
                    <Carousel data={data} />
                </div>
            </section>
            <br />
            {/* Como Trabalhamos */}
            <section className="grid grid-flow-row text-center mx-32">
                <div className="grid grid-flow-row mt-28 mb-10 lg:my-28">
                    <p className="Sora text-base md:text-2xl text-laranja-primary">Como Trabalhamos</p>
                    <h3 className="Michroma hidden md:grid text-white md:text-5xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug ">DO PLANEJAMENTO<br /> À CONCRETIZAÇÃO</h3>
                    <h3 className="Michroma leading-snug sm:leading-snug md:leading-snug lg:leading-snug md:hidden text-center text-white text-2xl ">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h3>
                </div>
                <div className="grid grid-flow-row lg:grid-flow-col gap-3">
                    <div className="grid grid-flow-col justify-center" >
                        <iframe className="lg:w-706 lg:h-433 md:w-847 md:h-520 w-311 h-191" src="https://www.youtube.com/embed/NvTngF_wJfo" title="A6 Construtora - Vídeos Institucional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="grid grid-flow-row gap-3 text-center border border-white md:text-start justify-self-center p-5 lg:ms-5 max-w-847">
                        <h2 className=" text-white Michroma text-2xl md:text-3xl lg:text-5xl">SOBRE NÓS</h2>
                        <p className=" text-white leading-loose text-xs md:text-base lg:text-lg Sora break-words">Nosso foco principal é fornecer expertise profissional em todos os aspectos da construção, desde o planejamento e design até a execução e conclusão do projeto. Acreditamos que a excelência é alcançada através da combinação de conhecimento técnico, criatividade e atenção aos detalhes, e isso se reflete em cada projeto que realizamos.</p>
                        <div className="grid lg:grid-flow-col justify-items-center gap-5 md:flex md:flex-row-reverse md:justify-start md:justify-self-start ">
                            <h3 className="text-white text-base md:text-2xl  sora">Conheça os <span className=" text-laranja-primary">benefícios</span> de trabalhar com a equipe de especialistas da A6</h3>
                            <a href='#beneficios' ><img className="border border-white rounded-full p-3 size-14 hover:bg-laranja-primary hover:scale-105 cursor-pointer" src={ArrowD} /></a>
                        </div>
                    </div>
                </div>
                {/* Como Construimos */}
                <div className="hidden md:grid grid-flow-row mx-10 my-28">
                    <div className="md:grid hidden grid-flow-col lg:justify-between">
                        <div className=" md:grid hidden my-10 grid-flow-row text-center lg:text-start ">
                            <h1 className="Michroma text-white text-3xl lg:text-5xl ">COMO <br className="hidden lg:grid" />CONSRUÍMOS?</h1>
                        </div>
                        {/* Div Botoes */}
                        <div className="hidden lg:grid grid-flow-col max-h-2 gap-x-5">
                            <button className="Sora hover:scale-105 duration-300 text-black bg-laranja-primary rounded-full p-3">Entrar em contato</button>
                            <button className="Sora hover:scale-105 duration-300 text-white border-white border rounded-full p-3">Ver + beneficios</button>
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
                            <img className="z-10 relative object-contain" src={Gerenciamento} />
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
                    <div className="md:grid lg:hidden hidden grid-flow-col relative gap-5">
                        {/* Div laranja de Fundo Div 1*/}
                        <div className="absolute bg-laranja-primary size-20 z-0 -top-5 -left-5"></div>
                        {/* Div 2 */}
                        <div className="bg-cinza z-10 relative w-414 h-auto ">
                            <h3 className="Michroma leading-snug text-laranja-primary absolute top-36 left-12 text-7xl">TRAN<br />SPAR<br />ÊNCIA
                            </h3>
                            <img className=" object-contain" src={Gerenciamento} />
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
                </div>
                <br />
                <br />
                {/* Portifolio de projetos */}
                <div className="grid grid-flow-row justify-center content-center justify-self-center  md:grid-cols-2  my-16 gap-5 lg:mt-56 md:justify-start mx-10">
                    <div className="grid grid-flo gap-10">
                        {/* Titulo */}
                        <div className="">
                            <h2 className="Michroma text-2xl md:text-3xl lg:text-5xl text-white text-center md:text-start">POTIFOLIO DE <br /><span className=" text-laranja-primary">PROJETOS</span></h2>
                            <p className="Sora text-white hidden lg:grid text-start">Vislumbre o que podemos fazer!</p>
                        </div>
                        {/* Projeto 1 */}
                        <div className="grid grid-flow-row justify-items-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start border-white border">
                            <div className="justify-self-center relative grid ">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra1} className="grayscale hover:grayscale-0 duration-300  object-contain " />
                            </div>
                            <h3 className="Michroma text-base text-white lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GERENCIAMENTO DE OBRA</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                        {/* Projeto 2 */}
                        <div className="grid grid-row justify-items-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start content-end border-white border">
                            <div className="justify-self-center relative grid ">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className=" border-laranja-primary border rounded-full absolute z-10 right-3 top-3">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra2} className="grayscale hover:grayscale-0 duration-300" />
                            </div>
                            <h3 className="Michroma text-base text-white md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">ADEQUAÇÃO DE SALA COMERCIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 3 */}
                    <div className="grid grid-flow-row gap-10">
                        <div className="grid grid-row justify-items-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start content-end border-white border">
                            <div className="justify-self-center  relative grid ">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra3} className="grayscale hover:grayscale-0 duration-300" />
                            </div>
                            <h3 className="Michroma text-base text-white lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">GALPÃO <br /> INDUSTRIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid md:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                        {/* Pojeto 4 */}
                        <div className="grid grid-row justify-items-center md:justify-start md:justify-items-start gap-5 p-3 md:text-start content-end border-white border">
                            <div className="justify-self-center  relative grid ">
                                {/* Mouse Hover Icon */}
                                <div className="absolute bottom-3 left-3 z-10 grid grid-flow-col items-center">
                                    <img className="size-4 md:size-8 lg:size-14 opacity-50" src={Mouse} />
                                    <p className=" sora text-xs text-white opacity-50">Passe o mouse <br /> acima da imagem</p>
                                </div>
                                {/* A6 Icon */}
                                <div className="border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                    <p className="Sora p-2 lg:py-5 lg:px-3 stroke-laranja-primary stroke text-transparente text-xs md:text-2xl lg:text-5xl">A6</p>
                                </div>
                                <img src={Obra4} className="grayscale hover:grayscale-0 duration-300" />
                            </div>
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
            <br />
            {/* Imagens para celular */}
            <section className="my-20 grid grid-flow-col items-center justify-center gap-2 md:hidden ">
                <div>
                    <img className=" object-cover object-left-bottom" src={predioFinal} />
                </div>
                <div className=" grid gap-2">
                    <img className="object-cover object-right-top" src={predioFinal} />
                    <img className=" object-cover object-left" src={predioFinal} />
                </div>
            </section>
            <br />
            <section id="beneficios" className="mx-32 grid grid-flow-row lg:grid-flow-col">
                <div className="grid grid-flow-row content-center justify-center">
                    <p className="Sora md:grid hidden  text-center lg:text-start text-laranja-primary text-2xl"> Benefícios</p>
                    <h2 className="Michroma text-white text-center lg:text-start text-2xl lg:text-7xl">SEU PROJETO, <br /> NOSSA <span className="text-laranja-primary">EXPERTISE</span></h2>
                </div>
                <div >
                    <CarouselBeneficios data={dataBene} />
                </div>
            </section>
            <br />
            {/* Seção Construir Sonho */}
            <section className="grid relative text-center lg:text-start justify-center grid-flow-row lg:grid-cols-2 lg:border lg:border-white my-28 mx-32 gap-10 top-20 p-10">
                <div className="relative overflow-visible ">
                    <img className="absolute overflow-visible w-full h-749 start-0 -bottom-10 z-10 hidden lg:grid" src={predioFinal} />
                </div>
                <div className="grid grid-flow-row gap-10">
                    <h2 className="Michroma text-2xl text-white md:text-4xl lg:text-5xl">DEIXE-NOS <span className=" text-laranja-primary">CONSTRUIR</span><br /> SEU SONHO</h2>
                    <p className="Sora text-white text-xs md:text-base">Peça seu orçamento agora! Sinta-se a vontade para entrar em contato com o nosso time, ficamos felizes de tirar suas dúvidas ou discutir seu próximo projeto!</p>
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
                            <button className="rounded-full p-2 m-2  bg-laranja-primary cursor-pointer"><img className="size-10" src={email} /></button>
                            <p className="text-white text-xl">contato@a6construtora.com</p>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="rounded-full p-2 m-2  bg-laranja-primary cursor-pointer"><img className="size-10" src={instagram} /></button>
                            <p className="text-white text-xl">@a6construtora</p>
                        </div>
                    </div>
                    <div className="grid grid-flow-row justify-center md:grid-cols-2 justify-self-center justify-items-center lg:hidden gap-5">
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-60"><img className="size-8" src={Whatsapp} /> &nbsp; WhatsApp</button>
                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-60">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                <p className="text-white text-xl">&nbsp;&nbsp;Instagram</p>
                            </button>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-60">
                                <img className="size-10 fill-white" src={PhoneWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;salvar Contato</p>
                            </button>

                        </div>
                        <div className="grid grid-flow-col items-center">
                            <button className="Sora grid grid-flow-col justify-self-center justify-center border-white border items-center text-black rounded-full p-5 hover:scale-105 duration-300 w-full text-xl min-w-60">
                                <img className="size-10 fill-white" src={EmailWhite} />
                                <p className="text-white text-xl">&nbsp;&nbsp;Enviar Email</p>
                            </button>

                        </div>
                    </div>
                </div>

            </section>
            <br />
        </>
    )
}

export default Home