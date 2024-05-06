import './App.css'
import {Outlet, useLocation} from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/footer'
import { useEffect } from 'react'
function App() {
  const location = useLocation()

  useEffect(()=>{

  }, [location.pathname])
  return (
    <div className={location.pathname == '/' ? 'radial grid grid-flow-row justify-center' : 'radial2 grid grid-flow-row justify-center'}>
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
