import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from './recpageFeatures/Page.js';
import ErrorPage from './app/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
   
  },
  {
    path: "/test",
    element: <Page />,
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
