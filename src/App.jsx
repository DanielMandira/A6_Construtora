import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
import Footer from './components/footer'
function App() {
  return (
    <>
    <div className='radial radial-2 justify-center grid grid-flow-row mx-auto max-w-155'> 
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
