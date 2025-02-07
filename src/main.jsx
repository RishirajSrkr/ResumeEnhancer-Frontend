import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { BrowserRouter } from 'react-router'
import {ResumeContextProvider} from './context/ResumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster />
    <ResumeContextProvider>
      <App />
    </ResumeContextProvider>
  </BrowserRouter>

)
