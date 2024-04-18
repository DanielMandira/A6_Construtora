import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
function App() {
  return (
    <>
    <div className='bg-black mx-auto grid grid-flow-row justify-center max-w-160'> 
      <NavBar />
      <Outlet/>
    </div>
    </>
  )
}

export default App
