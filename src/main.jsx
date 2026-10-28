import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const Home = React.lazy(() => import('./routes/home.jsx'))
const Projetos = React.lazy(() => import('./routes/projetos.jsx'))
const Servicos = React.lazy(() => import('./routes/servicos.jsx'))

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
    <React.Suspense fallback={<div className="text-white p-8">Carregando...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>,
)
