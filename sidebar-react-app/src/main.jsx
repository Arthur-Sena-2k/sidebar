import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/style/home.css'
import Home from './routes/Home'
import PainelDeControle from '../src/routes/PainelDeControle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/PainelDeControle',
    element: <PainelDeControle/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
