import React from "react";
import ArrowRD from '../assets/icons/arrow-r-d.svg'

const Home = () => {
    return (
        <>

            <section className="grid grid-flow-col border-t border-b border-white">
                <div className="border-white border-e w-10"></div>
                <div className="border-white border-e">
                    <div className="grid grid-flow-row border-white border-b">
                        <h1 className="Michroma text-6xl text-white content-center justify-self-center">Seu sonho, <br />
                            Nossa<br />
                            <span className=" text-laranja-primary">Fundação</span>
                        </h1>
                        <br />
                        <p className="text-md text-white content-center justify-self-center" >A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                        <br />
                        <button className="border text-white border-white rounded-full justify-self-start">
                            <image src='../assets/icons/arrow-r-d.svg' className=" border-white border rounded-full" />
                            Contate nossa equipe
                        </button>
                    </div>
                    <div className="grid grid-flow-col  justify-items-center border-white border-e border-b me-5">
                        <div className="border border-white">
                            <img className=" w-96 h-40" src="https://s3-alpha-sig.figma.com/img/1829/6b5a/446523c4de4bf5af2c730eb65b32b860?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acvw0YuQxfOW4IttvavP~iSFIY3sp8qDY8P-0xmcb6YUXpykJMncZjZ2uvUJvY~EJylSGItwm6YZh8hAIDk4UOQg0nk30~bE-J2RHgjmYMXtF0xGnUN6B-dNq-ksa-7XcX48~NFpodLJomF8Kz8jD7Qdbh13sTPon2sVI0hMf9iFg0Lx3cEq6AMpvLWX9v3X-gO-jLe2MrhCM1oFfx4BwHHkSZLj1T5rwUBGjXjtl1bUjkVEX0QdztOm9Qd1cZx6rYFxMegt8vSw8hcSAeMg8QxXAKIP5NeIk7q89wo0iD-fDAKT-2gwW2Z5skqlr6oXRwvydPfo66w1HeLBEmoWsg__" />
                            <div>
                                <p className=" text-white">Gerenciamento e fiscalização de obra</p>
                                <a className=" text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                        <div className="border border-white">
                            <img className=" w-96 h-40" src="https://s3-alpha-sig.figma.com/img/3c58/f388/35e39a4c3d4debde225dfaa477cb5bb3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJb7-vIvPIftwl7fuHmf-hYdi42uG4buRTCmgk84h-Is5PMhPENGv3DBOCqzQ8RilTPNGz8bKQFN~O6BNY98EDV4Xyl8u5c01KWSD0HP~jNsqtaCbnWq7MzSObvvFNMyw5MBaX6QSxmmYqFfR~9ffGHWFc3tyX5DeqiAeQIa~P-0MTDm1v~oZle73Kw50IqWDjKFx6UUfmdPZWOOyMLsd2125eWkMwMEt~pozYGgAqCptcxQR3ZWFNwJBA83QUOgqei2xKFaoAeBbx4vKHVHTu0BmtJZ6PJ5lZaB1PVEGrkeVZt7xCWilGxGQ484O05DdomJq-gNQmLau~6AtYrlGA__" />
                            <div>
                                <p className=" text-white">Planejamento e realização de um Galpão Comercial</p>
                                <a className=" text-laranja-primary">Ver mais +</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-flow-col content-center border-white border-b border-e">
                    <img className="image-initial" src="https://s3-alpha-sig.figma.com/img/ba36/ab9b/67126f16b01a6f4edd9e588f9b387604?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TG8jwb8OO09Hsxijj-b1PZfimfNrvnoWjfxYDfX0GFT3hVOXCW-wrSkKdSyIQ-gu8xHUlRnhbE4N5mqbp~DeftThQ9PDcBP7leOvYw51jLa1YQpTMtJDGjwwKbhCbICxQHH0XmoZ2zsLu7KmzKGU5H3hZatMpFEnF6obePqplEs-GMuOT3J0qvhbnLYTNFkBR6DFnSAAIMFyeSNsTcHyjGM2KPoMJm~e9~fUe2FFUJuT9YGY-Nw7hQ03D4wHOr93q3wJou57Wh7VjRYeoVsRZdwvEpnyIAW057uHykoM8Dv8WTkXCcjbmEA5BXB6aSbsaQmt5SS1zqtJ3YmDGgcTKQ__" />
                </div>
                <div className="border-white border-b  w-10"></div>
            </section>
            <br />
            <section className="grid grid-flow-col justify-center text-center text-white border-white border">
                <div className="m-10">
                    <h1 className=" text-7xl">20 <span className=" text-laranja-primary">+</span></h1>
                    <p  className=" text-2xl">Colaboradores no Time</p>
                </div>
                <div className="m-10">
                    <h1 className=" text-7xl">10 <span className=" text-laranja-primary">+</span></h1>
                    <p  className=" text-2xl">Projetos Concluídos</p>
                </div>
                <div className="m-10">
                    <h1 className=" text-7xl">4 <span className=" text-laranja-primary">+</span></h1>
                    <p className=" text-2xl">Anos de Experiência</p>
                </div>
            </section>
        </>
    )
}

export default Home