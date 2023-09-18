// import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'

const GestionCommerciale = () => {
  const navigate = useNavigate()
  return (
    <Div>
      {/* <h1>Gestion Commerciale</h1> */}
      {/* <button>
        <Link to="/documents">Documents</Link>
      </button>
      <button>
        <Link to="/documents/1">Document</Link>
      </button>
      <button>
        <Link to="/produits">Produits</Link>
      </button>
      <button>
        <Link to="/produits/1">Produit</Link>
      </button>
      <button>
        <Link to="/tiers/1">Tiers</Link>
      </button>
      <button>
        <Link to="/variant/1">Variant</Link>
      </button>
      <button>
        <Link to="/bundle/1">Bundle</Link>
      </button> */}
      <PageColumn />
      <PageColumn flex={3}>
        <Div>
          <PageColumn>
            <Button onClick={() => navigate('/documents')}>Documents</Button>
            <Button onClick={() => navigate('/tiers')}>Tiers</Button>
          </PageColumn>
          <PageColumn>
            <Button onClick={() => navigate('/produits')}>Produits</Button>
            <Button onClick={() => navigate('/bundles')}>Bundles</Button>
          </PageColumn>
        </Div>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default GestionCommerciale

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  margin: 0px auto 50px;
  width: 300px;
  height: 300px;
`
