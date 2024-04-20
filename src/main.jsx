import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/home.jsx'
import Sobre from './routes/sobre.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/sobre",
        element:<Sobre />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
