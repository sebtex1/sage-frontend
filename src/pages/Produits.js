import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PageColumn from '../components/PageColumn'
import InputForm from '../components/InputForm'
import TablePaged from '../components/TablePaged'
import ProductService from '../services/productService'

const Produits = () => {
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])
  const [produitsData, setProduitsData] = useState([])

  React.useEffect(() => {
    setFilteredData(produitsData.filter((item) => item.name.includes(search)))
  }, [search])

  React.useEffect(() => {
    ProductService.getProducts(setProduitsData)
  }, [])

  React.useEffect(() => {
    setFilteredData(produitsData)
  }, [produitsData])

  const navigate = useNavigate()

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
            headers={[
              { name: 'Nom', value: 'name' },
              { name: 'Référence', value: 'reference' },
            ]}
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
