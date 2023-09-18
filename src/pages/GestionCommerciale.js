// import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'

const GestionCommerciale = () => {
  const navigate = useNavigate()
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <Div>
          <PageColumn>
            <Rectangle>
              <H1>Documents</H1>
              <RowButtons>
                <Button onClick={() => navigate('/documents?')}>
                  Documents d&apos;achat
                </Button>
                <Button onClick={() => navigate('/documents?')}>
                  Documents de vente
                </Button>
              </RowButtons>
            </Rectangle>
            <Rectangle>
              <H1>Tiers</H1>
              <RowButtons>
                <Button onClick={() => navigate('/tiers?type=Fournisseur')}>
                  Fournisseurs
                </Button>
                <Button onClick={() => navigate('/tiers?type=Clients')}>
                  Clients
                </Button>
              </RowButtons>
            </Rectangle>
            <Rectangle>
              <H1>Produits</H1>
              <RowButtons>
                <Button onClick={() => navigate('/produits?')}>Produits</Button>
                <Button onClick={() => navigate('/produits?')}>Produits</Button>
              </RowButtons>
            </Rectangle>
            <Rectangle>
              <H1>Bundles</H1>
              <RowButtons>
                <Button onClick={() => navigate('/bundles?')}>Bundles</Button>
                <Button onClick={() => navigate('/bundles?')}>Bundles</Button>
              </RowButtons>
            </Rectangle>
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

const Rectangle = styled.div`
  width: 100%;
  height: 150px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 2px #000000;
  margin: 0px auto 40px;
`

const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: 50px;
`

const H1 = styled.h1`
  margin-left: 50px;
  color: #007e45;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-right: 50px;
  background-color: #bff1cd;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #007e45;
    color: #ffffff;
  }
`
