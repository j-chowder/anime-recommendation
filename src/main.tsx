import * as React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Page from './recpageFeatures/Page.js';
import ErrorPage from './app/ErrorPage.jsx';
import ExchangeContextProvider from './app/Context/APIExchangeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
   
  },
  {
    path: "/:category/:search",
    element: <Page />,
  },

])
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ExchangeContextProvider>
      <RouterProvider router={router} />
    </ExchangeContextProvider>
  </StrictMode>,
)
