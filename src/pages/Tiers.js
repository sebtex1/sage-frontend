import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import ButtonAction from '../components/ButtonAction'
import ModalAction from '../components/ModalAction'
import TablePaged from '../components/TablePaged'
import TiersService from '../services/tiersService'

const Tiers = () => {
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])
  const [modalTiers, setModalTiers] = React.useState(false)
  const [dataModalTiers, setDataModalTiers] = React.useState({
    ta_name: '',
    ta_type: '',
  })
  const [tiersData, setTiersData] = React.useState([])
  const [tiers, setTiers] = React.useState({})
  const [modalTiersSuppr, setModalTiersSuppr] = React.useState(false)

  React.useEffect(() => {
    TiersService.getTiers(setTiersData)
  }, [])

  React.useEffect(() => {
    setFilteredData(
      tiersData.filter((item) =>
        item.ta_name.toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }, [search])

  React.useEffect(() => {
    setFilteredData(tiersData)
  }, [tiersData])

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
          placeholder="Rechercher un tiers (Numéro)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DivSpaceBetween>
          <h1>Tiers:</h1>
          <ButtonAction
            text="Ajouter un tiers"
            icon
            onClick={() => setModalTiers(true)}
          />
        </DivSpaceBetween>
        {modalTiers ? (
          <ModalAction
            title="Ajout du tiers"
            model={[
              { name: 'Numéro', value: 'ta_name' },
              { name: 'Type', value: 'ta_type' },
            ]}
            data={dataModalTiers}
            button="Valider"
            onChange={(e) =>
              setDataModalTiers({
                ...dataModalTiers,
                [e.target.name]: e.target.value,
              })
            }
            submit={async () => {
              TiersService.postTiers(dataModalTiers, tiersData, setTiersData)
              setModalTiers(false)
            }}
            cancel={() => {
              setModalTiers(false)
            }}
          />
        ) : null}
        {filteredData ? (
          <TablePaged
            data={filteredData}
            headers={[
              { name: 'Numéro', value: 'ta_name' },
              { name: 'Type', value: 'ta_type' },
              { name: '', value: 'actions' },
            ]}
            itemsPerPage={15}
            rowClick={(object) => navigate(`/tiers/${object.ta_id}`)}
            actions={[
              {
                callback: (object) => {
                  setTiers(object)
                  setModalTiersSuppr(true)
                },
              },
            ]}
          />
        ) : null}
        {modalTiersSuppr ? (
          <ModalAction
            title="Suppression de tiers"
            text={`Êtes-vous sûr de vouloir supprimer le tiers ${tiers.ta_name} typé ${tiers.ta_type} ?`}
            button="Supprimer"
            submit={() => {
              TiersService.deleteTier(tiers.ta_id, tiersData, setTiersData)
              setModalTiersSuppr(false)
            }}
            cancel={() => {
              setModalTiersSuppr(false)
            }}
          />
        ) : null}
      </PageColumn>
      <PageColumn />
    </Div>
  )
}
export default Tiers

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
