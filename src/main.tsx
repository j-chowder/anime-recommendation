import * as React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Page from './recpageFeatures/Page.js';
import ErrorPage from './app/ErrorPage.jsx';
import FavContextLayout from './app/Context/FavoriteContext/FavContextLayout.jsx'
import RecErrorPage from './recpageFeatures/ErrorPage/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
   
  },
  {
    element: <FavContextLayout/>,
    children: [
    {
     path: "/:category/:search",
     element: <Page />,
    },
    ]
  },
  {
    path: "/Error",
    element: <RecErrorPage />
  },
  

])
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
