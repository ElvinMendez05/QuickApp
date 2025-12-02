import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuickAppShop } from './QuickAppShop'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuickAppShop />
  </StrictMode>,
)
