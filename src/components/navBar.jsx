import React from "react";
import { Link } from "react-router-dom";
import Home from '../routes/home'

const NavBar = () => {
    return(
        <header className=" grid grid-flow-col text-nowrap border-white text-center text-white">
            <div className=" border-b border-e border-white"></div>
            <div className=" border-b border-e border-white content-center ">
                <h1 className=' text-laranja-primary lg:text-3xl'>A6 Construtora</h1>
            </div>
            <div className=" border-b border-e border-white col-span-2">Logo aqui ??</div>
            <div className=" border-b border-e border-white content-center ">
                <Link to='/'>
                    <h3>Home</h3> 
                </Link>
            </div>
            <div className=" border-b border-e border-white content-center ">
                <h3>Sobre</h3>
            </div>
            <div className=" border-b border-e border-white content-center">
                <h3>Projetos</h3>
            </div>
            <div className=" border-b border-e border-white content-center">
                <h3>Benefícios</h3>
            </div>
            <div className=" border-b border-e border-white content-center">
                <h3>Contato</h3>
            </div>
            <div className=" border-b border-white content-center ">
                <button className=' bg-laranja-primary m-3 p-2 rounded-full'>Pedir Orçamento Agora!</button>
            </div>
            <div className=" border-b border-white"></div>
        </header>
)
}
export default NavBar