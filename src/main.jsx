import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Router as Routes } from './routes/router'

// Initialiser et rendre l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
