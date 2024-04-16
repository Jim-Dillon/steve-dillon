import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ExhibitionsPage from './pages/ExhibitionsPage.tsx'
import ShowcasePage from './pages/ShowcasePage.tsx'
import ContactPage from './pages/ContactPage.tsx'

const router = createBrowserRouter([
  {
    path: "/steve-dillon/",
    element: <App />,
    children: [
      {
        path: "/steve-dillon/",
        element: <HomePage />,
      },
      {
        path: "/steve-dillon/about",
        element: <AboutPage />,
      },
      {
        path: "/steve-dillon/exhibitions",
        element: <ExhibitionsPage />,
      },
      {
        path: "/steve-dillon/showcase",
        element: <ShowcasePage />,
      },
      {
        path: "/steve-dillon/contact",
        element: <ContactPage />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
