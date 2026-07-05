import { StrictMode } from 'react'
import Hero from "./sections/Hero";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/theme.css";
import "./styles/app.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
