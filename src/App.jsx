import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/footer'
function App() {
  return (
    <>
    <div className='radial grid grid-flow-row mx-auto'> 
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
