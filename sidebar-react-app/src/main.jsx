import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/style/home.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
