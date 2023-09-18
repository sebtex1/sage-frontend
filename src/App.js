import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './layouts/Default'
import Connected from './layouts/Connected'
import Home from './pages/Home'
// import Login from './pages/Login'
import Settings from './pages/Settings'
import GestionCommerciale from './pages/GestionCommerciale'
import Documents from './pages/Documents'
import Document from './pages/Document'
import Produits from './pages/Produits'
import Produit from './pages/Produit'
import Tiers from './pages/Tiers'
import Tier from './pages/Tier'
import Variant from './pages/Variant'
import Bundles from './pages/Bundles'
import Bundle from './pages/Bundle'
import NotFound from './pages/NotFound'
import Signin from './components/Signin'
import Signout from './components/Signout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Default>
          <Home />
        </Default>
      ),
    },
    // {
    //   path: '/login',
    //   element: <Login />,
    // },
    {
      path: '/settings',
      element: (
        <Connected>
          <Settings />
        </Connected>
      ),
    },
    {
      path: '/gestionCommerciale',
      element: (
        <Connected>
          <GestionCommerciale />
        </Connected>
      ),
    },
    {
      path: '/documents',
      element: (
        <Connected>
          <Documents />
        </Connected>
      ),
    },
    {
      path: '/documents/:id',
      element: (
        <Connected>
          <Document />
        </Connected>
      ),
    },
    {
      path: '/produits',
      element: (
        <Connected>
          <Produits />
        </Connected>
      ),
    },
    {
      path: '/produits/:id',
      element: (
        <Connected>
          <Produit />
        </Connected>
      ),
    },
    {
      path: '/tiers',
      element: (
        <Connected>
          <Tiers />
        </Connected>
      ),
    },
    {
      path: '/tiers/:id',
      element: (
        <Connected>
          <Tier />
        </Connected>
      ),
    },
    {
      path: '/variant/:id',
      element: (
        <Connected>
          <Variant />
        </Connected>
      ),
    },
    {
      path: '/bundles',
      element: (
        <Connected>
          <Bundles />
        </Connected>
      ),
    },
    {
      path: '/bundles/:id',
      element: (
        <Connected>
          <Bundle />
        </Connected>
      ),
    },
    {
      path: '/signin-oidc',
      element: <Signin />,
    },
    {
      path: '/signout-oidc',
      element: <Signout />,
    },
    {
      path: '*',
      element: (
        <Default>
          <NotFound />
        </Default>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default App
