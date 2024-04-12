import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar'
function App() {
  return (
    <>
    <div className=' grid-flow-col px-20 bg-black'> 
      <div>
        <NavBar />
      </div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
