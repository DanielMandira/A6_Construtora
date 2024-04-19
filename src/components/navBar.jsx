import React from "react";
import { Link } from "react-router-dom";
import Home from '../routes/home'

const NavBar = () => {
return(
<header className="Sora grid grid-flow-col text-nowrap max-w-155 border-white text-center text-white">
<div className=" border-e border-white w-10"></div>
<div className=" border-e border-white content-center ">
<h1 className=' text-laranja-primary lg:text-3xl'>A6 Construtora</h1>
</div>
<div className=" border-e border-white col-span-3"> </div>
<div className=" border-e border-white content-center">
<Link exact to='/' className=" hover:text-laranja-primary nav-link" activeClassName="text-laranja-primary" >
 Home 
</Link>
</div>
<div className="border-e border-white content-center ">
<Link className=" hover:text-laranja-primary nav-link" activeClassName="text-laranja-primary" to='/sobre'>
Sobre
 </Link>
</div>
<div className="border-e border-white content-center">
<Link className=" hover:text-laranja-primary nav-link" activeClassName="text-laranja-primary" to='#'>
 Projetos
</Link>
</div>
<div className="border-e border-white content-center">
<Link className=" hover:text-laranja-primary nav-link" activeClassName="text-laranja-primary" to='#'>
 Benefícios
</Link>
</div>
<div className="border-e border-white content-center">
<Link className=" hover:text-laranja-primary nav-link" activeClassName="text-laranja-primary" to='#'>
 Contato
</Link>
</div>
<div className="border-white content-center ">
<button className=' bg-laranja-primary m-3 p-2 rounded-full hover:scale-110 duration-300 '>Pedir Orçamento Agora!</button>
</div>
<div className="border-white w-10"></div>
</header>
)
}
export default NavBar