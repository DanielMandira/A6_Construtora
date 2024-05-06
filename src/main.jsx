import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/home.jsx'
import Projetos from './routes/projetos.jsx'
import Servicos from './routes/servicos.jsx'
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
        path: "/Projetos/:id",
        element:<Projetos />
      },
      {
        path: "/Servicos/:id",
        element:<Servicos />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
