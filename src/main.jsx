import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import HeaderLine from './features/Header/HeaderLine.jsx'

const outsideRootElement = document.getElementById('outside-root')
const outsideRoot = ReactDOM.createRoot(outsideRootElement);

outsideRoot.render(
  <HeaderLine />
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
