import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/footer'
function App() {
  return (
    <div className={location.pathname === '/' ? 'radial grid grid-flow-row justify-center' : 'grid grid-flow-row justify-center'}>
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
