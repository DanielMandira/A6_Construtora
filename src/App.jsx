import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
function App() {
  return (
    <>
    <div className='bg-black mx-auto center'> 
      <NavBar />
      <Outlet/>
    </div>
    </>
  )
}

export default App
