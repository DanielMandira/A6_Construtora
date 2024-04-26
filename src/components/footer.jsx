import React from "react";
import phone from '../assets/icons/phone.svg'
import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'
import whats from '../assets/icons/whatsapp.svg'

const Footer = () => {
    return (
        <>
            <section className="mt-20 mb-32 grid-flow-row md:pt-12 grid md:grid-flow-col gap-5 border-t border-white">
                <div className=" text-white md:m-16 mx-8  md:mx-12 mt-12">
                    <h1 className="Sora text-laranja-primary text-xl md:text-5xl lg:text-6xl ">A6 CONSTRUTORA</h1>
                    <h3 className="Sora text-white font-bold text-xl">Sua Fundação para o Futuro</h3>
                    <p className=" Sora hidden lg:grid text-sm text-white content-center justify-self-center max-w-lg" >
                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                    <div className="md:grid hidden grid-flow-col pt-10 justify-start">
                        <a href="#" className="rounded-full p-2 m-2 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10 stroke-white" src={phone} /></a>

                        <a href="#" className="rounded-full p-2 m-2 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10" src={instagram} /></a>

                        <a href="#" className="rounded-full p-2 m-2 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10" src={email} /></a>

                        <a href="#" className="rounded-full p-2 m-2 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10" src={whats} /></a>
                    </div>
                </div>
                    <h3 className="Sora text-white font-bold text-base md:hidden mx-8  md:mx-12">Links rápidos</h3>
                <div className=" text-white grid grid-flow-row content-around mx-8  md:mx-12">
                    <h3 className="Sora text-white text-base md:text-xl">Projetos</h3>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de galpão comercial</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Reforma de Apartamento Residencial</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Gerenciamento e fiscalização de obra</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Adequação de Sala Comercial</a>
                </div>
                <div className=" text-white grid grid-flow-row content-around mx-8  md:mx-12">
                    <h3 className="Sora text-white text-base md:text-xl">Serviços</h3>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de edifícios residenciais</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de edifícios industriais</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Gerenciamento de projetos</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Manutenção e reparos</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Design e engenharia</a>
                    <a href='#' className=" Sora text-xs md:text-sm text-white content-center my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Remodelação e renovação</a>
                </div>
            </section>
        </>
    )
}

export default Footer