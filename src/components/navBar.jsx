import React, { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import Menu from '../assets/icons/menu-icon.svg'
import A6_icon from '../assets/icons/a6Icon.png'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    const handleOutsideClick = (event) =>{
        if(isOpen && !event.target.closest('.navbar-modal')){
            setIsOpen(false)
        }
    }
    useEffect(() =>{
        document.addEventListener('mousedown',handleOutsideClick)
        return() => {
         document.removeEventListener('mousedown', handleOutsideClick)   
        }
    }, [isOpen])
    const Modal = () => {
        return (
            <header className={`${isOpen ? 'fixed top-0 start-0 grid grid-flow-row bg-grafite p-10 duration-500 w-9/12 z-10 h-full  lg:hidden text-start content-start gap-10 navbar-modal' : 'hidden'}`}>
                <h1 className='text-laranja-primary text-xl md:text-2xl'>A6 Construtora</h1>
                <div className="grid grid-flow-row gap-6">
                    <Link onClick={toggleNavBar} exact to='/' className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl" activeClassName="text-laranja-primary" >
                        Home
                    </Link>
                    <Link  onClick={toggleNavBar}  className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='/sobre'>
                        Sobre
                    </Link>
                    <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                        Projetos
                    </Link>
                    <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                        Benefícios
                    </Link>
                    <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                        Contato
                    </Link>
                </div>
            </header>
        )
    };

    return (
        <header className={`Sora grid grid-flow-col text-nowrap border-white border-b text-center text-white`}>
            <Modal />
            <div className="hidden md:grid border-e border-white w-10"></div>
            <div className=" border-e border-white content-center ">
                <h1 className=' text-base mx-10p text-laranja-primary sm:base md:text-xl lg:text-3xl'><a href="/"><img src={A6_icon}/></a></h1>
            </div>
            <div className=" border-e border-white col-span-2 lg:col-span-4 "> </div>
            <div className={` hidden  border-e lg:grid border-white content-center`}>
                <Link exact to='/' className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" >
                    Home
                </Link>
            </div>
            <div className={` hidden  border-e lg:grid border-white content-center`}>
                <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='/sobre'>
                    Sobre
                </Link>
            </div>
            <div className={` hidden  border-e lg:grid border-white content-center`}>        
            <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                Projetos
            </Link>
            </div>
            <div className={` hidden  border-e lg:grid border-white content-center`}>        
            <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                Benefícios
            </Link>
            </div>
            <div className={` hidden  border-e lg:grid border-white content-center`}>        
            <Link className="hover:text-laranja-primary nav-link text-white Sora text-lg md:text-xl " activeClassName="text-laranja-primary" to='#'>
                Contato
            </Link>
            </div>
            <div className={` hidden  border-e lg:grid justify-center border-white content-center`}>
                <button className=' bg-laranja-primary m-3 p-2 rounded-full hover:scale-110 duration-300 '>Pedir Orçamento Agora!</button>
            </div>
            <div className="lg:hidden border-white my-5 justify-center grid ">
                <img onClick={toggleNavBar} className="size-10 duration-500  lg:hidden" src={Menu} />
            </div>
            <div className="hidden md:grid border-white w-10 "></div>
        </header>
    )
}
export default NavBar