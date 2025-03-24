import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import HeaderLine from './features/Header/HeaderLine.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from './features/TestPage/Page.jsx'
import {searchAction} from './features/Search/InputBar.jsx'
import InputBar from './features/Search/InputBar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action:{searchAction},
    children: [
      {path: "InputBar", element: <InputBar />}
    ]
  },
  {
    path: "test",
    element: <Page />,
  },

])
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
