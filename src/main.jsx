import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShoopingCart } from './ShoopingCart'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ShoopingCart/>
    </StrictMode>
  </BrowserRouter>
)
