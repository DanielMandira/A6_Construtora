import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/footer'
function App() {
  return (
    <>
    <div className='radial'> 
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
