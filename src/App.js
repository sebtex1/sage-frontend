import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './layouts/Default'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import GestionCommerciale from './pages/GestionCommerciale'
import Documents from './pages/Documents'
import Document from './pages/Document'
import Produits from './pages/Produits'
import Produit from './pages/Produit'
import Tier from './pages/Tier'
import Variant from './pages/Variant'
import Bundles from './pages/Bundles'
import Bundle from './pages/Bundle'
import NotFound from './pages/NotFound'
import Signin from './components/Signin'
import Signout from './components/Signout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Default>
        <Home />
      </Default>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/settings',
    element: (
      <Default>
        <Settings />
      </Default>
    ),
  },
  {
    path: '/gestionCommerciale',
    element: (
      <Default>
        <GestionCommerciale />
      </Default>
    ),
  },
  {
    path: '/documents',
    element: (
      <Default>
        <Documents />
      </Default>
    ),
  },
  {
    path: '/documents/:id',
    element: (
      <Default>
        <Document />
      </Default>
    ),
  },
  {
    path: '/produits',
    element: (
      <Default>
        <Produits />
      </Default>
    ),
  },
  {
    path: '/produits/:id',
    element: (
      <Default>
        <Produit />
      </Default>
    ),
  },
  {
    path: '/tiers/:id',
    element: (
      <Default>
        <Tier />
      </Default>
    ),
  },
  {
    path: '/variant/:id',
    element: (
      <Default>
        <Variant />
      </Default>
    ),
  },
  {
    path: '/bundles',
    element: (
      <Default>
        <Bundles />
      </Default>
    ),
  },
  {
    path: '/bundles/:id',
    element: (
      <Default>
        <Bundle />
      </Default>
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

const App = () => {
  return <RouterProvider router={router} />
}

export default App
