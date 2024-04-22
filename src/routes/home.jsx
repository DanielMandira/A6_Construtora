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
                                    <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start  text-base lg:text-lg text-nowrap p-2 md:p-5 hover:bg-laranja-primary duration-300 ">
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
                <hr className="border-white absolute w-7/12 md:hidden" />
                <br className="md:hidden" />
                <hr className="border-white absolute w-7/12 top-7 end-0 md:hidden" />
            </div>
            <br />
            {/* Carrossel */}
            <section className="md:mx-10 justify-center grid md:justify-start">
                <h2 className="Michroma text-4xl text-white ">SERVIÇOS</h2>
                <Carousel data={data} />
            </section>
            <br />
            {/* Como Trabalhamos */}
            <section className="grid grid-flow-row text-center mx-10">
                <div className="grid grid-flow-row mt-28 mb-10 lg:my-28">
                    <p className="Sora text-base md:text-2xl text-laranja-primary">Como Trabalhamos</p>
                    <h3 className="Michroma leading-snug hidden text-white text-7xl ">DO PLANEJAMENTO<br /> À CONCRETIZAÇÃO</h3>
                    <h3 className="Michroma leading-snug md:hidden text-center text-white text-2xl ">SUA OBRA EM BOAS MÃOS DO INÍCIO AO FIM</h3>
                </div>
                <div className="grid grid-flow-row lg:grid-flow-col">
                    <div className="grid grid-flow-col justify-center" >
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
                {/* Como Construimos */}
                <div className="hidden md:grid grid-flow-row mx-10 my-28">
                    <div className="grid grid-flow-col justify-between">
                        <div className="grid grid-flow-row text-start ">
                            <h1 className="Michroma text-white text-5xl ">COMO <br />CONSRUÍMOS</h1>
                        </div>
                        {/* Div Botoes */}
                        <div className=" grid grid-flow-col max-h-2 gap-x-5">
                            <button className="Sora hover:scale-105 duration-300 text-black bg-laranja-primary rounded-full p-3">Entrar em contato</button>
                            <button className="Sora hover:scale-105 duration-300 text-white border-white border rounded-full p-3">Ver + beneficios</button>
                        </div>
                    </div>
                    {/* Divs posições diferentes */}
                    <div className="grid grid-flow-col relative gap-x-5">
                        {/* Div laranja de Fundo Div 1*/}
                        <div className="absolute bg-laranja-primary size-20 z-0 top-66 -left-6"></div>
                        {/* Div laranja de Fundo Div 2*/}
                        <div className="absolute bg-laranja-primary size-20 z-0 top-26 left-100"></div>
                        {/* Div laranja de Fundo Div 3*/}
                        <div className="absolute bg-laranja-primary size-20 z-10 -bottom-8 -right-8 content-center grid justify-center rotate-180"><img src={ArrowRD} className="size-12" /></div>
                        {/* Div 1 */}
                        <div className="bg-cinza relative z-10 grid p-16 content-evenly top-72">
                            <h3 className="Michroma text-start text-white text-3xl">PROJETOS <span className=" text-laranja-primary ">EXCLUSIVOS</span>
                            </h3>
                            <p className="Sora text-white text-start text-xl">Fazemos questão de personalizar nossos projetos para cada cliente, buscando garantir que cada detalhe seja tratado com alta  <span className="text-laranja-primary"> qualidade e eficiência.</span> Para isso, contamos com nossa equipe de especialistas!</p>

                        </div>
                        {/* Div 2 */}
                        <div className="bg-cinza z-10 relative w-414 h-450 top-32">
                            <h3 className="Michroma leading-snug text-laranja-primary absolute top-36 left-12 text-7xl">TRAN<br />SPAR<br />ÊNCIA
                            </h3>
                            <img className="" src={Gerenciamento} />
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
                </div>
                <br />
                <br />
                {/* Portifolio de projetos */}
                <div className="grid grid-flow-row max-w-96 justify-center content-center justify-self-center  lg:grid-cols-2  my-16 gap-5 lg:mt-56 lg:justify-start mx-10">
                    <div className="grid grid-flow-row gap-10">
                        {/* Titulo */}
                        <div className="">
                            <h2 className="Michroma text-2xl lg:text-5xl text-white text-center lg:text-start">POTIFOLIO DE <br /><span className=" text-laranja-primary">PROJETOS</span></h2>
                            <p className="Sora text-white hidden lg:grid text-start">Vislumbre o que podemos fazer!</p>
                        </div>
                        {/* Projeto 1 */}
                        <div className="grid grid-row justify-items-center lg:justify-start lg:justify-items-start gap-5 p-3 lg:text-start border-white border relative">
                            <div className="absolute bottom-80 left-8 z-10 grid grid-flow-col items-center">
                                <img className="size-14 opacity-50" src={Mouse} />
                                <p className=" sora text-xs text-white">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                <p className="Sora py-5 px-3 stroke-laranja-primary stroke text-transparente text-5xl">A6</p>
                            </div>
                            <img src="https://s3-alpha-sig.figma.com/img/bb37/e89c/4be1fdcc05ef0c3cbe69fe3bd7ee1431?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvbDNSeyeiUHfYsLVwvNng9yEe4Y9jvA-ihMNE5NqJzpaehDmZFJpUfcawz6FSlA3Lbc0PS9kXyXyYlxa6B2h341ewedKU9uCQSZHFlWhBKsi307qBbzHnusiWEmVheDKUV8HsdWZjP8CSx9lge3EEVvfK5f38~a9WzZf5oYQCeGGqWECucRadWRuPoU5QO3aPzVIh8O~qFAecsKkcStiSfYF~cnXs9V7sL6nTJro3uYyQgEO3imfAixiJPtjIxHu58CT8KgqzuZ0b0oiHMjL~UyoYvF3lhhaMK1jAzswyxGMZL~kAjfCw3Vx7MMPVmUEuNt8lsv9GAhLkOJGP~XTw__" className="grayscale hover:grayscale-0 duration-300 h-full" />
                            <h3 className="Michroma text-base text-white lg:text-5xl">GERENCIAMENTO DE OBRA</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid lg:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                        {/* Projeto 2 */}
                        <div className="grid grid-flow-row  justify-items-center lg:justify-start lg:justify-items-start gap-5 p-3 lg:text-start border-white border relative">
                            <div className="absolute bottom-80 left-8 z-10 grid grid-flow-col items-center">
                                <img className="size-14 opacity-50" src={Mouse} />
                                <p className=" sora text-xs text-white">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                <p className="Sora py-5 px-3 stroke-laranja-primary stroke text-transparente text-5xl">A6</p>
                            </div>
                            <img src="https://s3-alpha-sig.figma.com/img/dfdc/60a6/a98fd531b4ca6a23ddc9aaec237e936a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agpPuHyubOaDT2th~LQ1bdvT9eQFxuMfSCMcPPEbBZUCOT2~oeXpkpJtK8gWahPd9PHe8MylA32PrNfW9tzSPUIsgHhfbJYRyoATT-eL2uvFS-SOhX59OWEbB6ikQ0NcUjgpOv8GZ3-qW3bONyr7C1x4fRVzlKrDzlVPc7Odk2n2S5lI9jdx2hlbi35UYEJESOY6oUqb1nNcBFYbv~pk3irmyv2oFMdCCCSXO3zjHiUmlypvQHNpp3oTwk0XZlQafrU5-qPs~9cFTABIRSBDbV~W2D2PZp1EC~eifnVG31qRKd2wltFY-1CnxulbaPEg9G0xphekP7dXJFqFYQ5Npg__" className="grayscale hover:grayscale-0 duration-300 h-full w-full" />
                            <h3 className="Michroma text-base text-white lg:text-5xl">ADEQUAÇÃO DE SALA COMERCIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid lg:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                    {/* Projeto 3 */}
                    <div className="grid grid-flow-row gap-10">
                        <div className="grid grid-flow-row  justify-items-center lg:justify-start lg:justify-items-start gap-5 p-3 lg:text-start border-white border relative">
                            <div className="absolute bottom-64 left-8 z-10 grid grid-flow-col items-center">
                                <img className="size-14 opacity-50" src={Mouse} />
                                <p className=" sora text-xs text-white">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                <p className="Sora py-5 px-3 stroke-laranja-primary stroke text-transparente text-5xl">A6</p>
                            </div>
                            <img src="https://s3-alpha-sig.figma.com/img/8468/cb02/3f702692d1c388a26f8d52032f527119?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZCmk9x4Ro-oS-WpkH6ZKq6-WzjibzCOyHMU1DeSkIPfFGX85lwJmrR7gCedQkxqakVfg73SRMJDiPbPNa7Iq8ApRxpsZkzD937FNo1TSjApIFL1osZyZiBwVBPbSWL6VMyPXPaTpz0O5COJTyd-pRMHowFgsO4RNbJk6cVMnVF8NvC9diyI94edCgpwTC0sM3oIBABoo1Sb46SLnFgIdvLpWdMxtJtlG-Vw71vZknQ~RPk9ok-Zvhypz5tP7K7A9sXg~hnZN0HgJiuOXz4e5jGF7n4GYNkD42a0SwMn1-iVPlUkQQK1tvLdSsvxx0QLu-iKkDSmYMY6n-JsyR7bPw__" className="grayscale hover:grayscale-0 duration-300 h-full" />
                            <h3 className="Michroma text-base text-white lg:text-5xl">GALPÃO <br /> INDUSTRIAL</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid lg:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                        {/* Pojeto 4 */}
                        <div className="grid grid-flow-row  justify-items-center lg:justify-start lg:justify-items-start gap-5 p-3 lg:text-start border-white border relative">
                            <div className="absolute bottom-64 left-8 z-10 grid grid-flow-col items-center">
                                <img className="size-14 opacity-50" src={Mouse} />
                                <p className=" sora text-xs text-white">Passe o mouse <br /> acima da imagem</p>
                            </div>
                            <div className=" border-laranja-primary border rounded-full absolute z-10 right-10 top-8">
                                <p className="Sora py-5 px-3 stroke-laranja-primary stroke text-transparente text-5xl">A6</p>
                            </div>
                            <img src="https://s3-alpha-sig.figma.com/img/3a73/2013/c9f7b65f14ed714b04d740da500ccaf4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Im6nTSFqXXp7Ei6eibVn2wdFosOADPq~ssDLnUPbshiUEOCzhSwS9ArbLJHIoX7MUEoUJAtlcT8vxiJuQE68QYbPyOIn4uTAXRXvwA~DwjaUuC4PREI~tv0NvUziuZnVCBIUIg1nlOj~7DlJIL-gHIblW0qxvlmjrdzBdUbfx5qaEfQTjQBpFbSRYRTMCp6A0m1irTs4pPUCE0XVDtxrIpUJDfwWduf0YymAbKOuG~THTYSWt4W0QxKQ3BVuD7q16wP9KU9pwmMAvD~PAsiokkl5SqbkedD5FFiOThwrabge4xL-oycDFNV7z2Et3diDNsqMQ40TDqXej-dB1kE7PA__" className="grayscale hover:grayscale-0 duration-300 h-full" />
                            <h3 className="Michroma text-base text-white lg:text-5xl">REFORMA DE APARTAMENTO</h3>
                            <p className="Sora text-xs text-white lg:text-base">Gerenciamento de obra</p>
                            <div className="grid lg:grid-flow-col self-center items-center gap-5">
                                <button className="Sora cursor-pointer bg-laranja-primary rounded-full text-black text-sm lg:text-base px-5 py-2 hover:scale-105 duration-300">Orçamento</button>
                                <a href="#" className="Sora text-white text-xs decoration-white decoration-solid underline cursor-pointer hover:text-laranja-primary hover:decoration-laranja-primary duration-300 lg:text-base">+ Ver Galeria do Projeto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <br />
            <section className="mx-10 grid grid-flow-row lg:grid-flow-col">
                <div className="grid grid-flow-row justify-center">
                    <p className="Sora md:grid hidden text-laranja-primary text-2xl"> Benefícios</p>
                    <h2 className="Michroma text-white text-2xl lg:text-7xl">SEU PROJETO, &shy; NOSSA &shy;<span className="text-laranja-primary">EXPERTISE</span></h2>
                </div>
                <div >
                    <CarouselBeneficios data={dataBene} />
                </div>
            </section>
            <br />
            {/* Seção Construir Sonho */}
            <section className="grid relative text-center lg:text-start justify-center grid-flow-row lg:grid-cols-2 lg:border lg:border-white my-28 mx-10 gap-10 top-20 p-10">
                <div className="relative ">
                    <img className="absolute w-full h-749 start-0 z-10 -top-44 hidden lg:grid" src="https://s3-alpha-sig.figma.com/img/1bc9/96b2/8639031828b4ad70b7613e573adb8177?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3sGk4zzDCGoViLo4CSZJd16KXC2bO~uEnTFJS0VPHM3QXbqaLNXLD~KFHecJcTEh7v8pVUP8Ij1wwEBiaGCghEgpMT3gqXY8ZLYFnC81qqu~hZW66~8Yi3TcEfj6iKjosQ9gvsUNYayQj7K8bjchLjKrcE444FI5OSDwkervQWbJ2lIMoxPQXYmbFny9EZp3xYFTpzYoSt3LM1vNJJILjQebngLU2k04t2qUYQgyDO844G20~kk0BwWnBDMa9outhFvgdwWpz5wYmQue6Vk1UETEFINthZjUJLgoZiuAPF6Sh3L9ksnrsUbCZNOCm1s0BDn3Bu5~OMvrWOIiEaN4Q__" />
                </div>
                <div className="grid grid-flow-row gap-10">
                    <h2 className="Michroma text-2xl text-white md:text-4xl lg:text-5xl">DEIXE-NOS <span className=" text-laranja-primary">CONSTRUIR</span><br/> SEU SONHO</h2>
                    <p className="Sora text-white text-xs md:text-base">Peça seu orçamento agora! Sinta-se a vontade para entrar em contato com o nosso time, ficamos felizes de tirar suas dúvidas ou discutir seu próximo projeto!</p>
                    <div className="grid grid-flow-row md:grid-flow-col gap-5 content-center items-center">
                        <button className="Sora grid grid-flow-col justify-self-center justify-center bg-laranja-primary items-center text-black rounded-full p-5 hover:scale-105 duration-300 text-xl"><img className="size-8" src={Whatsapp} /> &nbsp;&nbsp;<span className="hidden lg:grid">Conversar no </span> WhatsApp</button>
                        <button className="Sora hidden lg:grid grid-flow-col  justify-center border border-white text-white items-center rounded-full p-5 hover:scale-105 duration-300 text-xl"><img className="w-20" src={QrCode} /> &nbsp;&nbsp; Escanear QrCode</button>
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
                </div>

            </section>
            <br />
        </>
    )
}

export default Home