import React from "react";
import phone from '../assets/icons/phone.svg'
import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'
import whats from '../assets/icons/whatsapp.svg'

const Footer = () => {
    return (
        <>
            <section className="mt-20 grid grid-flow-col border-t border-white">
                <div className=" text-white m-16">
                    <h1 className="Sora text-laranja-primary text-5xl">A6 CONSTRUTORA</h1>
                    <p className=" Sora text-md text-white content-center justify-self-center max-w-lg my-6" >
                        A A6 Construtora é uma construtora de Goiânia - GO dedicada a oferecer soluções inovadoras e de alta qualidade para uma ampla gama de projetos residenciais e industriais.</p>
                        <div className="grid grid-flow-col justify-start">
                         <a href="#" className="rounded-full p-2 m-2 hover:scale-105 bg-laranja-primary cursor-pointer"><img className="size-10" src={phone}/></a>

                         <a href="#" className="rounded-full p-2 m-2 hover:scale-105  bg-laranja-primary cursor-pointer"><img className="size-10" src={instagram}/></a>

                         <a href="#" className="rounded-full p-2 m-2 hover:scale-105  bg-laranja-primary cursor-pointer"><img className="size-10" src={email}/></a>

                         <a href="#" className="rounded-full p-2 m-2 hover:scale-105  bg-laranja-primary cursor-pointer"><img className="size-10" src={whats}/></a>
                        </div>
                </div>
                <div className=" text-white grid grid-flow-row my-16">
                <h3 className="Sora text-white text-xl">PROJETOS</h3>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de galpão comercial</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Reforma de Apartamento Residencial</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Gerenciamento e fiscalização de obra</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Adequação de Sala Comercial</a>
                </div>
                <div className=" text-white grid grid-flow-row my-16">
                <h3 className="Sora text-white text-xl ar">Serviços</h3>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de edifícios residenciais</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Construção de edifícios industriais</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Gerenciamento de projetos</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Manutenção e reparos</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Design e engenharia</a>
                    <a href='#' className=" Sora text-md text-white content-center  my-2 decoration-solid underline underline-offset-4 hover:text-laranja-primary cursor-pointer" >Remodelação e renovação</a>
                </div>
            </section>
        </>
    )
}

export default Footer