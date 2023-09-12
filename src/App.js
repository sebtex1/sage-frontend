import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './layouts/Default'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import GestionCommerciale from './pages/GestionCommerciale'
import Documents from './pages/Documents'
import DetailDocument from './pages/DetailDocument'
import Produits from './pages/Produits'
import DetailProduit from './pages/DetailProduit'
import DetailTiers from './pages/DetailTiers'
import Variant from './pages/Variant'
import Bundle from './pages/Bundle'
import NotFound from './pages/NotFound'

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
    path: '/documents/detail',
    element: (
      <Default>
        <DetailDocument />
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
    path: '/produits/detail',
    element: (
      <Default>
        <DetailProduit />
      </Default>
    ),
  },
  {
    path: '/tiers/detail',
    element: (
      <Default>
        <DetailTiers />
      </Default>
    ),
  },
  {
    path: 'variant/:id',
    element: (
      <Default>
        <Variant />
      </Default>
    ),
  },
  {
    path: 'bundle/:id',
    element: (
      <Default>
        <Bundle />
      </Default>
    ),
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
