import React from "react";
import ArrowRD from '../assets/icons/ArrowRD.svg'
import Carousel from "../components/carousel";
import data from '../data/carouseldata'
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
                        <div className="m-28">
                        {/* Slogan */}
                        <div className="grid grid-flow-row justify-center">
                        <h1 className="Michroma text-7xl text-white content-start justify-self-start">SUA <br />FUNDAÇÃO<br /> PARA O <br />
                            <span className=" text-laranja-primary">FUTURO</span>
                        </h1>
                        <br />
                        {/* Texto sobre a empresa */}
                        <div className="grid">
                        <p className=" Sora text-lg text-white content-center justify-self-center max-w-2xl" >A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                        <br />
                        </div>
                        {/* Botão Para Contato */}
                        <div className="grid">
                        <button className="flex Sora items-center border text-white border-white rounded-full  justify-self-start text-lg text-nowrap p-5 hover:bg-laranja-primary duration-500 ">
                            <div className="border border-white rounded-full bg-black">
                            <img className="p-4 w-16 " src={ArrowRD}/>
                            </div>
                            &nbsp;&nbsp;Contate nossa equipe
                        </button>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* Fotos Principais Serviçoes */}
                    <div className="grid grid-cols-2  justify-items-center border-white border-e  me-5">
                        <div className="border  border-white my-10">
                            <img className=" grayscale hover:grayscale-0 w-96 h-40" src="https://s3-alpha-sig.figma.com/img/1829/6b5a/446523c4de4bf5af2c730eb65b32b860?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acvw0YuQxfOW4IttvavP~iSFIY3sp8qDY8P-0xmcb6YUXpykJMncZjZ2uvUJvY~EJylSGItwm6YZh8hAIDk4UOQg0nk30~bE-J2RHgjmYMXtF0xGnUN6B-dNq-ksa-7XcX48~NFpodLJomF8Kz8jD7Qdbh13sTPon2sVI0hMf9iFg0Lx3cEq6AMpvLWX9v3X-gO-jLe2MrhCM1oFfx4BwHHkSZLj1T5rwUBGjXjtl1bUjkVEX0QdztOm9Qd1cZx6rYFxMegt8vSw8hcSAeMg8QxXAKIP5NeIk7q89wo0iD-fDAKT-2gwW2Z5skqlr6oXRwvydPfo66w1HeLBEmoWsg__" />
                            <div className="m-3">
                                <p className="Sora text-white">Gerenciamento e fiscalização de obra</p>
                                <a className="Sora cursor-pointer text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white my-10">
                            <img className=" grayscale hover:grayscale-0 w-96 h-40" src="https://s3-alpha-sig.figma.com/img/3c58/f388/35e39a4c3d4debde225dfaa477cb5bb3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJb7-vIvPIftwl7fuHmf-hYdi42uG4buRTCmgk84h-Is5PMhPENGv3DBOCqzQ8RilTPNGz8bKQFN~O6BNY98EDV4Xyl8u5c01KWSD0HP~jNsqtaCbnWq7MzSObvvFNMyw5MBaX6QSxmmYqFfR~9ffGHWFc3tyX5DeqiAeQIa~P-0MTDm1v~oZle73Kw50IqWDjKFx6UUfmdPZWOOyMLsd2125eWkMwMEt~pozYGgAqCptcxQR3ZWFNwJBA83QUOgqei2xKFaoAeBbx4vKHVHTu0BmtJZ6PJ5lZaB1PVEGrkeVZt7xCWilGxGQ484O05DdomJq-gNQmLau~6AtYrlGA__" />
                            <div className="m-3">
                                <p className="Sora text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" Sora text-laranja-primary cursor-pointer ">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Imagem Grande Lateral */}
                <div className=" grid grid-flow-col content-center border-white border-b border-e">
                    <img className="image-initial w-544 max-h-full p-10" src="https://s3-alpha-sig.figma.com/img/ba36/ab9b/67126f16b01a6f4edd9e588f9b387604?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TG8jwb8OO09Hsxijj-b1PZfimfNrvnoWjfxYDfX0GFT3hVOXCW-wrSkKdSyIQ-gu8xHUlRnhbE4N5mqbp~DeftThQ9PDcBP7leOvYw51jLa1YQpTMtJDGjwwKbhCbICxQHH0XmoZ2zsLu7KmzKGU5H3hZatMpFEnF6obePqplEs-GMuOT3J0qvhbnLYTNFkBR6DFnSAAIMFyeSNsTcHyjGM2KPoMJm~e9~fUe2FFUJuT9YGY-Nw7hQ03D4wHOr93q3wJou57Wh7VjRYeoVsRZdwvEpnyIAW057uHykoM8Dv8WTkXCcjbmEA5BXB6aSbsaQmt5SS1zqtJ3YmDGgcTKQ__" />
                </div>
                <div className="border-white border-b w-10"></div>
            </section>
            {/* Seção info numerica sobre a empresa */}
            <section className="grid max-w-160 mt-40 mb-40 grid-flow-col justify-center text-center text-white border-white border mx-10">
                <div className="m-8">
                    <h1 className="Michroma text-7xl">20 <span className=" text-laranja-primary">+</span></h1>
                    <p  className="Sora text-2xl">Colaboradores no Time</p>
                </div>
                <div className="m-8">
                    <h1 className="Michroma text-7xl">10 <span className=" text-laranja-primary">+</span></h1>
                    <p  className="Sora text-2xl">Projetos Concluídos</p>
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
                <Carousel data={data}/>
            </section>
        </>
    )
}

export default Home