import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import TablePaged from '../components/TablePaged'

const Produits = () => {
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])

  React.useEffect(() => {
    setFilteredData(produitsData.filter((item) => item.name.includes(search)))
  }, [search])

  const navigate = useNavigate()
  const produitsData = [
    { id: 1, name: 'Produit 1', type: 'Type 1', stock_tracking: true },
    { id: 2, name: 'Produit 2', type: 'Type 2', stock_tracking: false },
    { id: 3, name: 'Produit 3', type: 'Type 3', stock_tracking: true },
  ]
  return (
    <Div>
      <PageColumn>
        <InputForm
          label="Rechercher"
          type="text"
          id="search"
          name="search"
          placeholder="Rechercher un produit (Nom)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData ? (
          <TablePaged
            data={filteredData}
            headers={[{ name: 'Nom', value: 'name' }]}
            itemsPerPage={15}
            rowClick={(object) => navigate(`/produits/${object.id}`)}
          />
        ) : null}
      </PageColumn>
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
