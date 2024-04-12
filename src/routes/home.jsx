import React from "react";
import ArrowRD from '../assets/icons/arrow-r-d.svg'

const Home = () => {
    return (
        <div className="grid grid-flow-col border-white bgGradientCircle">
            <div className="border-white border-e-2">
                1
            </div>
            <div className="border-white border-e-2">
                <div className="grid grid-flow-row p-20 border-white border-b-2">
                    <h1 className="Michroma text-6xl text-white content-center justify-self-center">Seu sonho, <br />
                        Nossa<br />
                        <span className=" text-laranja-primary">Fundação</span>
                    </h1>
                    <br />
                    <p className="text-md text-white content-center justify-self-center" >A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                    <br/>
                    <button className="border text-white border-white rounded-full justify-self-start">
                        <image src='../assets/icons/arrow-r-d.svg' className=" border-white border rounded-full" /> 
                        Contate nossa equipe
                    </button>
                </div>
                <div className="grid grid-flow-col  justify-items-center border-white border-e-2 border-b-2 me-5">
                    <div className="m-5 border-2 border-white">
                        <img className=" w-96 h-40" src="https://s3-alpha-sig.figma.com/img/1829/6b5a/446523c4de4bf5af2c730eb65b32b860?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acvw0YuQxfOW4IttvavP~iSFIY3sp8qDY8P-0xmcb6YUXpykJMncZjZ2uvUJvY~EJylSGItwm6YZh8hAIDk4UOQg0nk30~bE-J2RHgjmYMXtF0xGnUN6B-dNq-ksa-7XcX48~NFpodLJomF8Kz8jD7Qdbh13sTPon2sVI0hMf9iFg0Lx3cEq6AMpvLWX9v3X-gO-jLe2MrhCM1oFfx4BwHHkSZLj1T5rwUBGjXjtl1bUjkVEX0QdztOm9Qd1cZx6rYFxMegt8vSw8hcSAeMg8QxXAKIP5NeIk7q89wo0iD-fDAKT-2gwW2Z5skqlr6oXRwvydPfo66w1HeLBEmoWsg__" />
                        texto 1
                    </div>
                    <div className="m-5 border-2 border-white">
                        <img className=" w-96 h-40" src="https://s3-alpha-sig.figma.com/img/1829/6b5a/446523c4de4bf5af2c730eb65b32b860?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acvw0YuQxfOW4IttvavP~iSFIY3sp8qDY8P-0xmcb6YUXpykJMncZjZ2uvUJvY~EJylSGItwm6YZh8hAIDk4UOQg0nk30~bE-J2RHgjmYMXtF0xGnUN6B-dNq-ksa-7XcX48~NFpodLJomF8Kz8jD7Qdbh13sTPon2sVI0hMf9iFg0Lx3cEq6AMpvLWX9v3X-gO-jLe2MrhCM1oFfx4BwHHkSZLj1T5rwUBGjXjtl1bUjkVEX0QdztOm9Qd1cZx6rYFxMegt8vSw8hcSAeMg8QxXAKIP5NeIk7q89wo0iD-fDAKT-2gwW2Z5skqlr6oXRwvydPfo66w1HeLBEmoWsg__" />
                        texto 2
                    </div>
                </div>
            </div>
            <div className=" grid grid-flow-col content-center border-white border-b-2 border-e-2">
                <img className="m-4 image-initial" src="https://s3-alpha-sig.figma.com/img/ba36/ab9b/67126f16b01a6f4edd9e588f9b387604?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TG8jwb8OO09Hsxijj-b1PZfimfNrvnoWjfxYDfX0GFT3hVOXCW-wrSkKdSyIQ-gu8xHUlRnhbE4N5mqbp~DeftThQ9PDcBP7leOvYw51jLa1YQpTMtJDGjwwKbhCbICxQHH0XmoZ2zsLu7KmzKGU5H3hZatMpFEnF6obePqplEs-GMuOT3J0qvhbnLYTNFkBR6DFnSAAIMFyeSNsTcHyjGM2KPoMJm~e9~fUe2FFUJuT9YGY-Nw7hQ03D4wHOr93q3wJou57Wh7VjRYeoVsRZdwvEpnyIAW057uHykoM8Dv8WTkXCcjbmEA5BXB6aSbsaQmt5SS1zqtJ3YmDGgcTKQ__" />
            </div>
            <div className="border-white border-b-2">
        
            </div>

        </div>
    )
}

export default Home