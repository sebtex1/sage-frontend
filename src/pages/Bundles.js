import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'
import ModalAction from '../components/ModalAction'
import TablePaged from '../components/TablePaged'
import ProductService from '../services/productService'

const Bundles = () => {
  const [search, setSearch] = React.useState('')
  // const [filteredData, setFilteredData] = React.useState([])
  const [bundle, setBundle] = React.useState({})
  const [modalBundle, setModalBundle] = React.useState(false)
  const [modalBundleSuppr, setModalBundleSuppr] = React.useState(false)
  const [dataModalBundle, setDataModalBundle] = React.useState({
    name: '',
    reference: '',
  })
  const [bundlesData, setBundlesData] = React.useState([])

  React.useEffect(() => {
    ProductService.getBundles(setBundlesData)
  }, [])

  const navigate = useNavigate()

  return (
    <Div>
      <PageColumn />
      <PageColumn flex={5}>
        <InputForm
          label="Rechercher"
          type="text"
          id="search"
          name="search"
          placeholder="Rechercher un bundle (Nom)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DivSpaceBetween>
          <h1>Bundles:</h1>
          <ButtonAction
            text="Ajouter un bundle"
            icon
            onClick={() => setModalBundle(true)}
          />
        </DivSpaceBetween>
        {modalBundle ? (
          <ModalAction
            title="Ajout du produit"
            model={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
            ]}
            data={dataModalBundle}
            button="Valider"
            onChange={(e) =>
              setDataModalBundle({
                ...dataModalBundle,
                [e.target.name]: e.target.value,
              })
            }
            submit={async () => {
              ProductService.postBundle(
                dataModalBundle,
                bundlesData,
                setBundlesData,
              )
              setModalBundle(false)
            }}
            cancel={() => {
              setModalBundle(false)
            }}
          />
        ) : null}
        {bundlesData ? (
          <TablePaged
            data={bundlesData}
            headers={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
              { name: '', value: 'actions' },
            ]}
            itemsPerPage={15}
            rowClick={(object) => navigate(`/bundles/${object.id}`)}
            actions={[
              {
                callback: (object) => {
                  setBundle(object)
                  setModalBundleSuppr(true)
                },
              },
            ]}
          />
        ) : null}
        {modalBundleSuppr ? (
          <ModalAction
            title="Suppression de bundle"
            text={`Êtes-vous sûr de vouloir supprimer le bundle ${bundle.name} référencé ${bundle.reference} ?`}
            button="Supprimer"
            submit={() => {
              ProductService.deleteBundle(
                bundle.id,
                bundlesData,
                setBundlesData,
              )
              setModalBundleSuppr(false)
            }}
            cancel={() => {
              setModalBundleSuppr(false)
            }}
          />
        ) : null}
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Bundles

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DivSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
