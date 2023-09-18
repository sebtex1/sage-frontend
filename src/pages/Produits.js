import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import TablePaged from '../components/TablePaged'
import ButtonAction from '../components/ButtonAction'
import ModalAction from '../components/ModalAction'
import ProductService from '../services/productService'

const Produits = () => {
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])
  const [produitsData, setProduitsData] = useState([])
  const [produit, setProduit] = useState({})
  const [modalProduit, setModalProduit] = useState(false)
  const [dataModalProduit, setDataModalProduit] = useState({
    name: '',
    reference: '',
  })
  const [modalProduitSuppr, setModalProduitSuppr] = useState(false)

  React.useEffect(() => {
    ProductService.getProducts(setProduitsData)
  }, [])

  React.useEffect(() => {
    setFilteredData(
      produitsData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }, [search])

  React.useEffect(() => {
    setFilteredData(produitsData)
  }, [produitsData])

  const navigate = useNavigate()

  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <InputForm
          label="Rechercher"
          type="text"
          id="search"
          name="search"
          placeholder="Rechercher un produit (Nom)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DivSpaceBetween>
          <h1>Produits:</h1>
          <ButtonAction
            text="Ajouter un produit"
            icon
            onClick={() => setModalProduit(true)}
          />
        </DivSpaceBetween>
        {modalProduit ? (
          <ModalAction
            title="Ajout du produit"
            model={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
            ]}
            data={dataModalProduit}
            button="Valider"
            onChange={(e) =>
              setDataModalProduit({
                ...dataModalProduit,
                [e.target.name]: e.target.value,
              })
            }
            submit={async () => {
              ProductService.postProduct(
                dataModalProduit,
                produitsData,
                setProduitsData,
              )
              setModalProduit(false)
            }}
            cancel={() => {
              setModalProduit(false)
            }}
          />
        ) : null}
        {filteredData ? (
          <TablePaged
            data={filteredData}
            headers={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
              { name: '', value: 'actions' },
            ]}
            itemsPerPage={15}
            rowClick={(object) => navigate(`/produits/${object.id}`)}
            actions={[
              {
                callback: (object) => {
                  setProduit(object)
                  setModalProduitSuppr(true)
                },
              },
            ]}
          />
        ) : null}
        {modalProduitSuppr ? (
          <ModalAction
            title="Suppression de produit"
            text={`Êtes-vous sûr de vouloir supprimer le produit ${produit.name} référencé ${produit.reference} ?`}
            button="Supprimer"
            submit={() => {
              ProductService.deleteProduit(
                produit.id,
                produitsData,
                setProduitsData,
              )
              setModalProduitSuppr(false)
            }}
            cancel={() => {
              setModalProduitSuppr(false)
            }}
          />
        ) : null}
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Produits

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

const DivSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
