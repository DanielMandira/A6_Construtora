import React from "react";
import { Link } from "react-router-dom";
import Home from '../routes/home'

const NavBar = () => {
    return(
        <div className=" grid grid-flow-col text-nowrap border-white text-center text-white bgGradientCircle">
            <span className=" border-b-2 border-e-2 border-white"></span>
            <div className=" border-b-2 border-e-2 border-white content-center ">
                <h1 className=' text-laranja-primary text-md sm:text-1xl md:text-2xl lg:text-3xl'>A6 Construtora</h1>
            </div>
            <span className=" border-b-2 border-e-2 border-white col-span-2"></span>
            <div className=" border-b-2 border-e-2 border-white content-center ">
                <Link to='/'>
                    <h3>Home</h3> 
                </Link>
            </div>
            <div className=" border-b-2 border-e-2 border-white content-center ">
                <h3>Sobre</h3>
            </div>
            <div className=" border-b-2 border-e-2 border-white content-center">
                <h3>Projetos</h3>
            </div>
            <div className=" border-b-2 border-e-2 border-white content-center">
                <h3>Benefícios</h3>
            </div>
            <div className=" border-b-2 border-e-2 border-white content-center">
                <h3>Contato</h3>
            </div>
            <div className=" border-b-2 border-white content-center ">
                <button className=' bg-laranja-primary m-3 p-2 rounded-full'>Pedir Orçamento Agora!</button>
            </div>
            <span className=" border-b-2 border-white"></span>
        </div>
)
}
export default NavBar